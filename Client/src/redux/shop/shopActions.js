import shopActionTypes from "./shopActionTypes";

import {
  convertCollectionsToMap,
  database,
} from "../../Firebase/firebase.utils";
import { getDocs, collection } from "firebase/firestore";

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collections) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionsFailure = (errorMsg) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMsg,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchCollectionsStart());
    (async () => {
      try {
        const querySnapshot = await getDocs(
          collection(database, "collections")
        );
        const collectionsMap = convertCollectionsToMap(querySnapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      } catch (error) {
        dispatch(fetchCollectionsFailure(error.message));
      }
    })();
  };
};
