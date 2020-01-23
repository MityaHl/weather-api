import { ENTER_CITY } from "@/constants"

export default function city(state = "", action) {
  if (action.type === ENTER_CITY) {
    return action.payload;
  }
  return state;
}
