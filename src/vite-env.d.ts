
/// <reference types="vite/client" />

// WebXR TypeScript definitions
interface Navigator {
  xr?: {
    isSessionSupported(mode: string): Promise<boolean>;
    requestSession(mode: string, options?: any): Promise<any>;
  };
}
