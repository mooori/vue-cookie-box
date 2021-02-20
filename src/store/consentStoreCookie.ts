import Cookies from "js-cookie"

import {ConsentStore} from "./consentStore"

/**
 * Implements ConsentStore for ConsentStoreSource.Cookie.
 */
export class ConsentStoreCookie implements ConsentStore {
  private readonly _cookieAttributes = {
    expires: 365 // see ConsentStoreSource.Cookie
  }

  private readonly _cookieName = "vue-cookie-box__consent"

  private _hasConsent: boolean

  constructor() {
    this._hasConsent = !!Cookies.get(this._cookieName)
  }

  hasConsent(): boolean {
    return this._hasConsent
  }

  persist(): void {
    this._hasConsent = true
    Cookies.set(this._cookieName, "1", this._cookieAttributes) // any truthy string
  }
}
