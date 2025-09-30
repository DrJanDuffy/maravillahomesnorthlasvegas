# Open Graph Implementation Guide

This document explains the comprehensive Open Graph protocol implementation for the Las Vegas Real Estate website, following the official Open Graph specification.

## Overview

The implementation includes:
- ✅ Complete Open Graph metadata following the official specification
- ✅ Twitter Card support for enhanced social sharing
- ✅ Centralized metadata configuration for consistency
- ✅ Page-specific metadata generation
- ✅ Real estate business-specific meta tags
- ✅ Structured data for rich snippets

## File Structure

```
src/
├── config/
│   ├── app-config.ts           # Base app configuration
│   └── metadata-config.ts      # Centralized metadata configuration
├── components/
│   └── og-meta-tags.tsx        # Custom OG meta tags component
└── app/
    ├── layout.tsx              # Root layout with base metadata
    ├── (main)/
    │   ├── about/
    │   │   └── page.tsx        # Example: About page metadata
    │   └── blog/
    │       └── las-vegas-market-update-2024/
    │           └── page.tsx    # Example: Article metadata
    └── (external)/
        └── page.tsx            # Home page with structured data
```

## Implementation Details

### 1. Base Metadata Configuration (`src/config/metadata-config.ts`)

The centralized configuration provides:

#### Required Open Graph Properties
- `og:title` - Page title
- `og:type` - Object type (website, article, profile, business.business)
- `og:image` - Image URL with structured properties
- `og:url` - Canonical URL

#### Optional Open Graph Properties
- `og:description` - Page description
- `og:site_name` - Site name
- `og:locale` - Primary locale (en_US)
- `og:locale:alternate` - Additional locales (en_CA, es_US)
- `og:determiner` - Article determiner ("the")
- `og:country_name` - Country (United States)
- `og:region` - Region (Nevada)
- `og:email` - Contact email
- `og:phone_number` - Contact phone

#### Structured Image Properties
- `og:image:url` - Image URL
- `og:image:secure_url` - HTTPS image URL
- `og:image:type` - MIME type (image/jpeg)
- `og:image:width` - Image width (1200px)
- `og:image:height` - Image height (630px)
- `og:image:alt` - Alt text

#### Twitter Card Properties
- `twitter:card` - Card type (summary_large_image)
- `twitter:site` - Site Twitter handle
- `twitter:creator` - Content creator handle
- `twitter:title` - Tweet title
- `twitter:description` - Tweet description
- `twitter:image` - Tweet image

### 2. Page-Specific Metadata Generation

#### Basic Page Metadata
```typescript
import { generatePageMetadata } from "@/config/metadata-config";

export const metadata = generatePageMetadata({
  title: "Custom Page Title",
  description: "Custom page description",
  url: "https://lasvegasrealestate.com/custom-page",
  type: "website",
  images: customImages, // Optional custom images
});
```

#### Article Metadata
```typescript
import { generateArticleMetadata } from "@/config/metadata-config";

export const metadata = generateArticleMetadata({
  title: "Article Title",
  description: "Article description",
  url: "https://lasvegasrealestate.com/blog/article",
  publishedTime: "2024-01-15T10:00:00Z",
  modifiedTime: "2024-01-15T15:30:00Z",
  author: "Dr. Janet Duffy",
  section: "Market Analysis",
  tags: ["real estate", "market trends"],
  featuredImage: "/blog/article-image.jpg"
});
```

### 3. Custom Meta Tags Component (`src/components/og-meta-tags.tsx`)

For advanced use cases requiring custom Open Graph tags:

```typescript
import { OGMetaTags, TwitterMetaTags } from "@/components/og-meta-tags";

// In your page component
<OGMetaTags
  title="Custom Title"
  description="Custom description"
  url="https://lasvegasrealestate.com/page"
  type="website"
  image="/custom-image.jpg"
  imageWidth={1200}
  imageHeight={630}
  imageAlt="Custom image description"
  publishedTime="2024-01-15T10:00:00Z"
  tags={["tag1", "tag2"]}
/>
```

### 4. Real Estate Business Meta Tags

Custom meta tags for real estate business information:
- `business:contact_data:street_address`
- `business:contact_data:locality`
- `business:contact_data:region`
- `business:contact_data:postal_code`
- `business:contact_data:country_name`
- `place:location:latitude`
- `place:location:longitude`

## Usage Examples

### Home Page
```typescript
// src/app/layout.tsx
import { homePageMetadata } from "@/config/metadata-config";

export const metadata: Metadata = homePageMetadata;
```

### About Page
```typescript
// src/app/(main)/about/page.tsx
import { aboutPageMetadata } from "@/config/metadata-config";

export const metadata: Metadata = aboutPageMetadata;
```

### Listings Page
```typescript
// src/app/(main)/listings/page.tsx
import { listingsPageMetadata } from "@/config/metadata-config";

export const metadata: Metadata = listingsPageMetadata;
```

### Contact Page
```typescript
// src/app/(main)/contact/page.tsx
import { contactPageMetadata } from "@/config/metadata-config";

export const metadata: Metadata = contactPageMetadata;
```

### Blog Post
```typescript
// src/app/(main)/blog/[slug]/page.tsx
import { generateArticleMetadata } from "@/config/metadata-config";

export const metadata: Metadata = generateArticleMetadata({
  title: "Blog Post Title",
  description: "Blog post description",
  url: `https://lasvegasrealestate.com/blog/${slug}`,
  publishedTime: post.publishedAt,
  modifiedTime: post.updatedAt,
  author: post.author,
  section: post.category,
  tags: post.tags,
  featuredImage: post.featuredImage
});
```

## Image Requirements

### Open Graph Images
- **Primary Image**: 1200x630px (1.91:1 ratio)
- **Square Image**: 800x800px (1:1 ratio)
- **Format**: JPEG or PNG
- **File Size**: Under 8MB
- **Alt Text**: Descriptive text for accessibility

### Twitter Card Images
- **Summary Large Image**: 1200x630px
- **Summary**: 400x400px minimum
- **Format**: JPEG or PNG
- **File Size**: Under 5MB

## Testing and Validation

### Facebook Debugger
1. Visit [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Enter your page URL
3. Click "Debug" to see how Facebook will display your page
4. Click "Scrape Again" to refresh the cache

### Twitter Card Validator
1. Visit [Twitter Card Validator](https://cards-dev.twitter.com/validator)
2. Enter your page URL
3. View the preview of how your page will appear in tweets

### Google Rich Results Test
1. Visit [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Enter your page URL or paste HTML
3. Verify structured data markup

### Open Graph Protocol Validator
1. Visit [Open Graph Protocol Validator](https://www.opengraph.xyz/)
2. Enter your page URL
3. View all Open Graph properties

## Best Practices

### 1. Image Optimization
- Use high-quality, relevant images
- Optimize file sizes for web
- Include descriptive alt text
- Use HTTPS URLs for secure images

### 2. Content Guidelines
- Keep titles under 60 characters
- Keep descriptions under 160 characters
- Use compelling, action-oriented language
- Include relevant keywords naturally

### 3. Consistency
- Use consistent branding across all social shares
- Maintain the same tone and voice
- Keep contact information up to date
- Regular testing and updates

### 4. Performance
- Preload critical Open Graph images
- Use responsive images when possible
- Minimize metadata payload size
- Cache social media previews appropriately

## Troubleshooting

### Common Issues

1. **Images not displaying**: Check image URLs are accessible and HTTPS
2. **Stale cache**: Use Facebook Debugger to refresh cache
3. **Missing metadata**: Verify metadata is properly exported
4. **Type errors**: Ensure TypeScript types are correctly imported

### Debug Steps

1. Check page source for meta tags
2. Validate with Facebook Debugger
3. Test with Twitter Card Validator
4. Verify structured data with Google tools
5. Check console for JavaScript errors

## Future Enhancements

### Planned Features
- [ ] Dynamic image generation for listings
- [ ] Video Open Graph support
- [ ] Multi-language metadata
- [ ] A/B testing for social previews
- [ ] Analytics integration for social sharing

### Monitoring
- Track social media engagement
- Monitor click-through rates from social platforms
- Analyze which content performs best
- Regular audits of metadata implementation

## Resources

- [Open Graph Protocol Documentation](https://ogp.me/)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview)
- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Google Rich Results Guidelines](https://developers.google.com/search/docs/appearance/structured-data)
