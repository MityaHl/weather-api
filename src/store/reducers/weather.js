import { QUERY_WEATHER, LOAD_WEATHER } from "@/constants"

export default function weather(state = [], action) {
  if (action.type === QUERY_WEATHER) {
    return action.payload;
  }
  if (action.type === LOAD_WEATHER) {
    return action.payload;
  }
  return state;
}
