import { IS_OPEN_FORM_FALSE, IS_OPEN_FORM_TRUE } from "@/constants"

export default function isOpenForm(state = true, action) {
  if (action.type === IS_OPEN_FORM_FALSE) {
    return action.payload;
  }
  if (action.type === IS_OPEN_FORM_TRUE) {
    return action.payload;
  }
  return state;
}
