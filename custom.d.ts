// Custom type declarations for RealScout web components
// This file extends the existing JSX namespace without replacing it

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-advanced-search': {
        'agent-encoded-id': string;
      };
      'realscout-simple-search': {
        'agent-encoded-id': string;
      };
      'realscout-office-listings': {
        'agent-encoded-id': string;
        'sort-order'?: string;
        'listing-status'?: string;
        'property-types'?: string;
        'price-min'?: string;
        'price-max'?: string;
      };
      'realscout-your-listings': {
        'agent-encoded-id': string;
        'sort-order'?: string;
        'listing-status'?: string;
        'property-types'?: string;
      };
      'realscout-home-value': {
        'agent-encoded-id': string;
      };
    }
  }
}

export {};

