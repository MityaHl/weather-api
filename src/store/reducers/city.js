import { ENTER_CITY } from '@/constants'

export default function city (state = '', action) {
  switch (action.type) {
    case ENTER_CITY: return action.payload

    default: return state
  }
}
