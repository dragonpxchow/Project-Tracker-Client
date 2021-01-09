import { GET_ERRORS, CLEAR_ERRORS } from "./../actions/actionTypes";

const initState = {
  msg: {},
  status: null,
  id: null,
};

const errorReducer = (errorState = initState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      console.log("errorReducers >>>>>>>", action);
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id,
      };

    case CLEAR_ERRORS:
      return {
        msg: {},
        status: null,
        id: null,
      };

    default:
      return errorState;
  }
};

export default errorReducer;
