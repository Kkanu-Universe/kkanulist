import type { Theme } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      white: string;
      black: string;
      red: string;
      green: string;
      blue: string;
      midnight: string;
      midnightPurple: string;
      gray0: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      gray6: string;
      gray7: string;
      gray8: string;
      gray9: string;
      skeleton: string;
      skeletonDrk: string;
    };
    border: {
      radius: {
        default: string;
      },
    };
    space: {
      default: string;
    };
    gap: {
      default: string;
    };
    icon: {
      size: {
        lg: string;
        default: string;
        sm: string;
        zs: string;
      },
    };
  }
}

const theme: Theme = {
  color: {
    white: '#ffffff',
    black: '#000000',
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
    midnight: '#302e41',
    midnightPurple: '#342048',
    gray0: '#f8f9fa',
    gray1: '#f1f3f5',
    gray2: '#e9ecef',
    gray3: '#dee2e6',
    gray4: '#ced4da',
    gray5: '#adb5bd',
    gray6: '#868e96',
    gray7: '#495057',
    gray8: '#343a40',
    gray9: '#212529',
    skeleton: '#A5A5A54D',
    skeletonDrk: '#A5A5A580',
  },
  border: {
    radius: {
      default: '0.25rem',
    },
  },
  space: {
    default: '1rem',
  },
  gap: {
    default: '0.0625rem',
  },
  icon: {
    size: {
      lg: '1.5rem',
      default: '1.25rem',
      sm: '1rem',
      zs: '0.75rem',
    },
  },
};

export default theme;