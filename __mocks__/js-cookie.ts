// https://stackoverflow.com/a/57659783/11139683
import * as allCookie from "js-cookie"

type CookieType = typeof allCookie
const Cookie = jest.genMockFromModule<CookieType>("js-cookie")

interface CookieStore {
  [key: string]: string
}

const store: CookieStore = {}

// Cookie.get is overloaded.
function get(): CookieStore
function get(name: string): string | undefined

function get(name?: string): CookieStore | string | undefined {
  if (name) {
    return store[name]
  } else {
    return store
  }
}

Cookie.get = get

Cookie.set = (
  name: string,
  value: string,
  options?: allCookie.CookieAttributes
): string | undefined => {
  store[name] = value
  // Return value of Cookie.set is undocumented.
  // Return anything - it's not supposed to be used.
  return value
}

Cookie.remove = (name: string, options?: allCookie.CookieAttributes): void => {
  delete store[name]
}

export default Cookie
