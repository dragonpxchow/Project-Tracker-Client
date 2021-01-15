import { SET_ERRORS, CLEAR_ERRORS } from "./actionTypes";
// SET ERRORS
//export const setErrors = (msg: IMsg, status: number, id: any = null) => {
export const setErrors = (msg, status, id) => {
  //console.log("setErros >>>>>", msg.msg + "<<>>>" + status + "=" + id);
  return {
    type: SET_ERRORS,
    payload: { msg, status, id },
  };
};

// CLEAR ERRORS
export const clearErrors = () => {
  console.log("errorAction @@@@@@@@@@@@@@@@@@@@@@ clear error");
  return {
    type: CLEAR_ERRORS,
  };
};
