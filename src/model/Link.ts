import {Location} from "vue-router/types"
import {PropType} from "vue"

/** Link is either a href string or a vue-router Location. */
export type Link = string | Location

export const componentProp = {
  type: [String, Object] as PropType<Link | undefined>,
  default: undefined
}
