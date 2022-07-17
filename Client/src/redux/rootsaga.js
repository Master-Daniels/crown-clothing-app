import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/userSaga";
import { cartSagas } from "./cart/cartSagas";
import { shopSagas } from "./shop/shopSaga";

export function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
