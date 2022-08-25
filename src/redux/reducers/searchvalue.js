import { SEARCHVALUE } from "../constant";

const initState = [];
export default function searchvalue_reducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case SEARCHVALUE: {
      return [data];
    }
    
    default:
      return initState;
  }
}
