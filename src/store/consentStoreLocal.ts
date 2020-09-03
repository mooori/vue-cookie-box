import {ConsentStore} from "@/store/consentStore.ts"

/**
 * Implements ConsentStore for ConsentStoreSource.LocalStorage.
 */
export class ConsentStoreLocal implements ConsentStore {
  private _hasConsent: boolean
  private readonly _storageKey = "vue-cookie-box__consent"

  constructor() {
    this._hasConsent = !!window.localStorage.getItem(this._storageKey)
  }

  hasConsent(): boolean {
    return this._hasConsent
  }

  persist(): void {
    this._hasConsent = true
    try {
      // Fails in Safari's private mode, see
      // https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
      window.localStorage.setItem(this._storageKey, "1") // any truthy string
    } catch (err) {
      // Do nothing, consent in browser's private mode is deleted anyway.
    }
  }
}
