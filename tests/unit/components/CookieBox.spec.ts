import {mount} from "@vue/test-utils"

import {ConsentStoreSource, newConsentStore} from "@/store/consentStore.ts"
import CookieBox from "@/components/CookieBox.vue"

describe("CookieBox", () => {
  // Use ConsentStoreSource.LocalStorage, it is the easiest to mock due to
  // jest-localstorage-mock.
  beforeEach(() => {
    localStorage.clear()
  })

  const mountCookieBox = () => mount(CookieBox, {
    propsData: {
      consentStoreSource: ConsentStoreSource.LocalStorage
    }
  })

  const persistConsent = (): void => {
    newConsentStore(ConsentStoreSource.LocalStorage).persist()
  }

  const consentIsPersisted = (): boolean => {
    return newConsentStore(ConsentStoreSource.LocalStorage).hasConsent()
  }

  it("has banner for clean ConsentStore", () => {
    const w = mountCookieBox()
    const box = w.find(".cookie-box")
    expect(box.exists()).toBe(true)
  })

  it("has no banner for stored consent", () => {
    persistConsent()
    const w = mountCookieBox()
    expect(w.find(".cookie-box-banner").exists()).toBe(false)
  })

  it("hides banner after user gives consent", async () => {
    const w = mountCookieBox()
    const btn = w.get(".cookie-box-banner__give-consent")
    await btn.trigger("click")
    expect(w.find(".cookie-box-banner").exists()).toBe(false)
  })

  it("persists consent in store", async () => {
    expect(consentIsPersisted()).toBe(false)
    const w = mountCookieBox()
    const btn = w.get(".cookie-box-banner__give-consent")
    await btn.trigger("click")
    expect(consentIsPersisted()).toBe(true)
  })
})
