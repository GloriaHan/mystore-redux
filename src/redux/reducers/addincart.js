import { ADDINCART,SAMEINCART } from "../constant";

const initState = [];
export default function addincart_reducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADDINCART:
      return [data,...preState];
    case SAMEINCART:
      return [1,2];
    default:
      return initState;
  }
}
