import { IS_OPEN_FORM_FALSE, IS_OPEN_FORM_TRUE } from '@/constants'

export default function isOpenForm (state = true, action) {
  switch (action.type) {
    case IS_OPEN_FORM_FALSE: return action.payload

    case IS_OPEN_FORM_TRUE: return action.payload

    default: return state
  }
}
