declare global {
  interface Window {
    __NUXT_JSONP_CACHE__: { [key: string]: any }
  }
}

export interface ModuleOptions {
    defaultProvider: string;
    presets: ImagePreset[],
    providers: {
      local: LocalOptions
      [name: string]: any
    }
    provider: object;
}

export interface ImagePreset {
  name: string
  modifiers: any
  provider?: string
}

export type ProviderFactory = (options: any) => Provider

export interface Provider {
    runtime: string
    runtimeOptions: any
    middleware?(): ProviderServerMiddleware
}

export type ProviderServerMiddleware = (req, res, next) => void

export interface LocalOptions {
  dir?: string
  clearCache?: boolean | string;
}

export interface GenerateOptions {
  providerOptions: any
  modifiers: {
    contain: string
  }
}

export interface ImageModifiers {
  width: number
  height: number
  size: string
  format: string
  [key: string]: any;
}

export interface RuntimeProvider {
  // Apply provider base
  // Add additional params (like signuture)
  // Do modifier mapping
  generateURL: (src: string, modifiers: ImageModifiers, providerOptions: any) => { url: string, isStatic?: boolean }
}