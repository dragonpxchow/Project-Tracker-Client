import { GET_ERRORS, CLEAR_ERRORS } from "./actionTypes";
// RETURN ERRORS
//export const returnErrors = (msg: IMsg, status: number, id: any = null) => {
export const returnErrors = (msg, status, id) => {
  console.log("returnErros >>>>>", msg + "<<>>>" + status);
  return {
    type: GET_ERRORS,
    payload: { msg, status, id },
  };
};

// CLEAR ERRORS
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
