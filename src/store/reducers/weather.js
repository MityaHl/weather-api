export default function weather(state = [], action) {
  if (action.type === "QUERY_WEATHER") {
    return action.payload;
  }
  return state;
}
