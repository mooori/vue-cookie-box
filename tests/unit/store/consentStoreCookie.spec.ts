import Cookie from "js-cookie"

import {ConsentStoreCookie} from "@/store/consentStoreCookie.ts"
import { ConsentStoreLocal } from '@/store/consentStoreLocal'

describe("consentStoreCookie", () => {
  jest.mock("js-cookie")

  beforeEach(() => {
    Cookie.remove(name)
  })

  const name = "vue-cookie-box__consent"
  const value = "1"

  it("has no consent for missing cookie", () => {
    const s = new ConsentStoreLocal()
    expect(s.hasConsent()).toBe(false)
  })

  it("persists consent", () => {
    const s = new ConsentStoreCookie()
    expect(s.hasConsent()).toBe(false)
    s.persist()
    expect(s.hasConsent()).toBe(true)
    expect(Cookie.get(name)).toBe(value)
  })

  it("retrieves consent from ConsentStore", () => {
    Cookie.set(name, value)
    const s = new ConsentStoreCookie()
    expect(s.hasConsent()).toBe(true)
  })
})
