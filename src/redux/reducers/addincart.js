import { ADDINCART,UPDATEINCART, DELETEINCART } from "../constant";

const initState = [];
export default function addincart_reducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADDINCART: {
      let result =
        preState.length > 0
          ? preState.find((item) => item.id === data.id)
          : undefined;
      if (result) {
        result.qty = result.qty + data.qty;
        return [...preState];
      } else {
        return [data, ...preState];
      }
    }
    case DELETEINCART :{
      let result = [...preState].filter((itemObj) => {
        return itemObj.id !== data.id;
      });
      return [ ...result];
    }

    case UPDATEINCART:{
      return [ ...preState];
    }
    default:
      return initState;
  }
}
