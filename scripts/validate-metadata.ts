#!/usr/bin/env tsx

/**
 * Metadata Validation Script
 * 
 * This script validates that all Open Graph metadata is properly configured
 * and follows the Open Graph protocol specification.
 */

import { readFileSync } from 'fs';
import { join } from 'path';

// Required Open Graph properties
const REQUIRED_OG_PROPERTIES = [
  'og:title',
  'og:type', 
  'og:image',
  'og:url'
];

// Recommended Open Graph properties
const RECOMMENDED_OG_PROPERTIES = [
  'og:description',
  'og:site_name',
  'og:locale',
  'og:image:width',
  'og:image:height',
  'og:image:alt',
  'og:image:secure_url',
  'og:image:type'
];

// Twitter Card properties
const TWITTER_PROPERTIES = [
  'twitter:card',
  'twitter:title',
  'twitter:description',
  'twitter:image'
];

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  missingRequired: string[];
  missingRecommended: string[];
  missingTwitter: string[];
}

function validateMetadata(metadata: any): ValidationResult {
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
    missingRequired: [],
    missingRecommended: [],
    missingTwitter: []
  };

  // Check required Open Graph properties
  if (!metadata.openGraph) {
    result.errors.push('Missing openGraph configuration');
    result.isValid = false;
    return result;
  }

  const og = metadata.openGraph;

  // Validate required properties
  if (!og.title) result.missingRequired.push('og:title');
  if (!og.type) result.missingRequired.push('og:type');
  if (!og.url) result.missingRequired.push('og:url');
  if (!og.images || !Array.isArray(og.images) || og.images.length === 0) {
    result.missingRequired.push('og:image');
  }

  // Validate recommended properties
  if (!og.description) result.missingRecommended.push('og:description');
  if (!og.siteName) result.missingRecommended.push('og:site_name');
  if (!og.locale) result.missingRecommended.push('og:locale');

  // Validate image properties
  if (og.images && og.images.length > 0) {
    const image = og.images[0];
    if (!image.width) result.missingRecommended.push('og:image:width');
    if (!image.height) result.missingRecommended.push('og:image:height');
    if (!image.alt) result.missingRecommended.push('og:image:alt');
    if (!image.secureUrl) result.missingRecommended.push('og:image:secure_url');
    if (!image.type) result.missingRecommended.push('og:image:type');
  }

  // Validate Twitter Card properties
  if (!metadata.twitter) {
    result.warnings.push('Missing Twitter Card configuration');
  } else {
    const twitter = metadata.twitter;
    if (!twitter.card) result.missingTwitter.push('twitter:card');
    if (!twitter.title) result.missingTwitter.push('twitter:title');
    if (!twitter.description) result.missingTwitter.push('twitter:description');
    if (!twitter.images) result.missingTwitter.push('twitter:image');
  }

  // Check for common issues
  if (og.title && og.title.length > 60) {
    result.warnings.push('Title is longer than 60 characters (may be truncated)');
  }

  if (og.description && og.description.length > 160) {
    result.warnings.push('Description is longer than 160 characters (may be truncated)');
  }

  if (og.images && og.images.length > 0) {
    const image = og.images[0];
    if (image.width && image.height) {
      const ratio = image.width / image.height;
      if (Math.abs(ratio - 1.91) > 0.1) {
        result.warnings.push(`Image ratio ${ratio.toFixed(2)}:1 is not optimal for Open Graph (recommended: 1.91:1)`);
      }
    }
  }

  if (result.missingRequired.length > 0) {
    result.isValid = false;
    result.errors.push(`Missing required properties: ${result.missingRequired.join(', ')}`);
  }

  return result;
}

function printValidationResult(result: ValidationResult, pageName: string) {
  console.log(`\n📄 ${pageName}`);
  console.log('='.repeat(50));

  if (result.isValid) {
    console.log('✅ Metadata is valid');
  } else {
    console.log('❌ Metadata has errors');
  }

  if (result.errors.length > 0) {
    console.log('\n🚨 Errors:');
    result.errors.forEach(error => console.log(`  • ${error}`));
  }

  if (result.missingRecommended.length > 0) {
    console.log('\n⚠️  Missing recommended properties:');
    result.missingRecommended.forEach(prop => console.log(`  • ${prop}`));
  }

  if (result.missingTwitter.length > 0) {
    console.log('\n🐦 Missing Twitter properties:');
    result.missingTwitter.forEach(prop => console.log(`  • ${prop}`));
  }

  if (result.warnings.length > 0) {
    console.log('\n⚠️  Warnings:');
    result.warnings.forEach(warning => console.log(`  • ${warning}`));
  }
}

async function main() {
  console.log('🔍 Validating Open Graph Metadata Implementation');
  console.log('='.repeat(60));

  try {
    // Import the metadata configurations
    const { 
      homePageMetadata,
      aboutPageMetadata,
      listingsPageMetadata,
      contactPageMetadata,
      homeValuationPageMetadata
    } = await import('../src/config/metadata-config');

    const pages = [
      { name: 'Home Page', metadata: homePageMetadata },
      { name: 'About Page', metadata: aboutPageMetadata },
      { name: 'Listings Page', metadata: listingsPageMetadata },
      { name: 'Contact Page', metadata: contactPageMetadata },
      { name: 'Home Valuation Page', metadata: homeValuationPageMetadata }
    ];

    let totalValid = 0;
    let totalPages = pages.length;

    for (const page of pages) {
      const result = validateMetadata(page.metadata);
      printValidationResult(result, page.name);
      
      if (result.isValid) {
        totalValid++;
      }
    }

    console.log('\n📊 Summary');
    console.log('='.repeat(50));
    console.log(`✅ Valid pages: ${totalValid}/${totalPages}`);
    console.log(`❌ Invalid pages: ${totalPages - totalValid}/${totalPages}`);

    if (totalValid === totalPages) {
      console.log('\n🎉 All pages have valid Open Graph metadata!');
      process.exit(0);
    } else {
      console.log('\n⚠️  Some pages need attention. Please fix the errors above.');
      process.exit(1);
    }

  } catch (error) {
    console.error('❌ Error validating metadata:', error);
    process.exit(1);
  }
}

// Run the validation
main().catch(console.error);
