import { all, call, put, takeLatest } from "redux-saga/effects";
import { clearCart } from "./cartActions";
import userActionsTypes from "../user/userTypes";

export function* onSignOutSuccess() {
  yield takeLatest(userActionsTypes.SIGN_OUT_SUCCESS, function* () {
    yield put(clearCart());
  });
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
