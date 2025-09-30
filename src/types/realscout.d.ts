declare namespace JSX {
  interface IntrinsicElements {
    'realscout-advanced-search': {
      'agent-encoded-id': string;
      children?: React.ReactNode;
    };
    'realscout-simple-search': {
      'agent-encoded-id': string;
      children?: React.ReactNode;
    };
    'realscout-office-listings': {
      'agent-encoded-id': string;
      'sort-order'?: string;
      'listing-status'?: string;
      'property-types'?: string;
      'price-min'?: string;
      'price-max'?: string;
      children?: React.ReactNode;
    };
    'realscout-your-listings': {
      'agent-encoded-id': string;
      'sort-order'?: string;
      'listing-status'?: string;
      'property-types'?: string;
      children?: React.ReactNode;
    };
    'realscout-home-value': {
      'agent-encoded-id': string;
      children?: React.ReactNode;
    };
  }
}

// Global type declarations for RealScout custom elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-advanced-search': {
        'agent-encoded-id': string;
        children?: React.ReactNode;
      };
      'realscout-simple-search': {
        'agent-encoded-id': string;
        children?: React.ReactNode;
      };
      'realscout-office-listings': {
        'agent-encoded-id': string;
        'sort-order'?: string;
        'listing-status'?: string;
        'property-types'?: string;
        'price-min'?: string;
        'price-max'?: string;
        children?: React.ReactNode;
      };
      'realscout-your-listings': {
        'agent-encoded-id': string;
        'sort-order'?: string;
        'listing-status'?: string;
        'property-types'?: string;
        children?: React.ReactNode;
      };
      'realscout-home-value': {
        'agent-encoded-id': string;
        children?: React.ReactNode;
      };
    }
  }
}

export {};
