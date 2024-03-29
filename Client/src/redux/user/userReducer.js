import userActionsTypes from "./userTypes";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionsTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case userActionsTypes.SIGN_IN_FAILURE:
    case userActionsTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case userActionsTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    default:
      return state;
  }
};
export default userReducer;
