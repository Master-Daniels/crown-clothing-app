import { takeLatest, call, put, all } from "redux-saga/effects";

import shopActionTypes from "./shopActionTypes";
import { getDocs, collection } from "firebase/firestore";
import {
  convertCollectionsToMap,
  database,
} from "../../Firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shopActions";

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    function* fetchCollectionsAsync() {
      try {
        const querySnapshot = yield getDocs(
          collection(database, "collections")
        );
        const collectionsMap = yield call(
          convertCollectionsToMap,
          querySnapshot
        );
        if (Object.keys(collectionsMap).length !== 0)
          yield put(fetchCollectionsSuccess(collectionsMap));
      } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
      }
    }
  );
}
export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
