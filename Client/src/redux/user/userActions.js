import userActionsTypes from "./userTypes";
export const setCurrentUser = (user) => ({
  type: userActionsTypes.SET_CURRENT_USER,
  payload: user,
});
export const googleSignInStart = () => ({
  type: userActionsTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: userActionsTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});
export const createUserWithEmailAndPasswordStart = (emailAndPassword) => ({
  type: userActionsTypes.CREATE_EMAIL_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: userActionsTypes.SIGN_IN_SUCCESS,
  payload: user,
});
export const signInFailure = (error) => ({
  type: userActionsTypes.SIGN_IN_FAILURE,
  payload: error,
});
export const checkUserSession = () => ({
  type: userActionsTypes.CHECK_USER_SESSION,
});
export const signOutStart = () => ({
  type: userActionsTypes.SIGN_OUT_START,
});
export const signOutSuccess = () => ({
  type: userActionsTypes.SIGN_OUT_SUCCESS,
});
export const signOutFailure = (error) => ({
  type: userActionsTypes.SIGN_OUT_FAILURE,
  payload: error,
});
