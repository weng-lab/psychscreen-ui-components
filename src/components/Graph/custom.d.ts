declare module 'cytoscape-cose-bilkent' {
    const coseBilkent: (cytoscape: any) => void;
    export = coseBilkent;
  }
  
  declare module 'use-react-screenshot' {
    import { RefObject } from 'react';
  
    type ScreenshotOptions = {
      type?: string;
      quality?: number;
    };
  
    export function useScreenshot(
      options?: ScreenshotOptions
    ): any;
  
    export function createFileName(
      extension: string,
      name: string
    ): string;
  }
  