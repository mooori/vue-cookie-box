import {ConsentStoreCookie} from "@/store/consentStoreCookie.ts"
import {ConsentStoreLocal} from "@/store/consentStoreLocal.ts"

export enum ConsentStoreSource {
  /**
   * Every request will include an extra cookie to signal consent was given.
   *
   * Expiration time of the cookie storing consent is set to 365 days. It may
   * be capped at 7 days or 24 hours in some browsers, see
   * https://github.com/js-cookie/js-cookie/wiki/Frequently-Asked-Questions#why-is-my-expiration-time-capped-at-7-days-or-24-hours
   */
  Cookie,

  /**
   * Choose this source if your backend doesn't care about cookie consent.
   * This saves bandwidth because no extra cookie is sent.
   *
   * Consent is stored without expiration.
   */
  LocalStorage
}

/**
 * ConsentStore persist users consent across browser sessions.
 */
export interface ConsentStore {
  hasConsent(): boolean;
  persist(): void;
}

export function newConsentStore(s: ConsentStoreSource): ConsentStore {
  switch (s) {
  case ConsentStoreSource.Cookie:
    return new ConsentStoreCookie()
  case ConsentStoreSource.LocalStorage:
    return new ConsentStoreLocal()
  default:
    throw Error(`unknown ConsentStoreSource ${s}`)
  }
}
