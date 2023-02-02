import { ADDINCART,UPDATEINCART,DELETEINCART } from "../constant";

export const addincartAction = (data) => ({ type: ADDINCART, data });
export const updateincartAction = (data) => ({ type: UPDATEINCART, data });
export const deleteincartAction = (data) => ({ type: DELETEINCART, data });
