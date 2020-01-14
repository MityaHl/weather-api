export default function weather(state = [], action) {
  if (action.type === "QUERY_FIVE_DAY_WEATHER") {
    return action.payload;
  }
  return state;
}
