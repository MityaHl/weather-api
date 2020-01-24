import { QUERY_FIVE_DAY_WEATHER } from "@/constants"

export default function weather(state = [], action) {
  switch (action.type) {
    case QUERY_FIVE_DAY_WEATHER: return action.payload 

    default: return state
  }
}
