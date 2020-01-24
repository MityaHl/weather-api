import { QUERY_WEATHER, LOAD_WEATHER } from '@/constants'

export default function weather (state = [], action) {
  switch (action.type) {
    case QUERY_WEATHER: return action.payload

    case LOAD_WEATHER: return action.payload

    default: return state
  }
}
