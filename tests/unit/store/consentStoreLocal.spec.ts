import {ConsentStoreLocal} from "@/store/consentStoreLocal.ts"

// Relies on jest-localstorage-mock.
describe("ConsentStoreLocal", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  const key = "vue-cookie-box__consent"

  it("has no consent for clean ConsentStore", () => {
    const s = new ConsentStoreLocal()
    expect(s.hasConsent()).toBe(false)
  })

  it("persists consent", () => {
    const s = new ConsentStoreLocal()
    expect(s.hasConsent()).toBe(false)
    s.persist()
    expect(s.hasConsent()).toBe(true)
  })

  it("retrieves consent from ConsentStore", () => {
    localStorage.setItem(key, "1")
    const s = new ConsentStoreLocal()
    expect(s.hasConsent()).toBe(true)
  })
})
