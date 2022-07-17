import { takeLatest, put, all, call } from "redux-saga/effects";
import userActionsTypes from "./userTypes";
import {
  auth,
  signInWithGoogle,
  signInWithEmail,
  emailAndPassword,
  createUserProfileDocument,
  getCurrentUser,
} from "../../Firebase/firebase.utils";
import { getDoc } from "firebase/firestore";
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
} from "./userActions";

export function* getSnapshotFromUserAuth(userAuth, name) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, name);
    const userSnapshot = yield getDoc(userRef);
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionsTypes.GOOGLE_SIGN_IN_START, function* () {
    try {
      const { user } = yield signInWithGoogle();
      yield getSnapshotFromUserAuth(user);
    } catch (error) {
      yield put(signInFailure(error));
    }
  });
}

export function* onEmailSignInStart() {
  yield takeLatest(
    userActionsTypes.EMAIL_SIGN_IN_START,
    function* ({ payload: { email, password } }) {
      try {
        const { user } = yield signInWithEmail(auth, email, password);
        yield getSnapshotFromUserAuth(user);
      } catch (error) {
        yield put(signInFailure(error));
      }
    }
  );
}
export function* onCreateAccountWithEmailAndPasswordStart() {
  yield takeLatest(
    userActionsTypes.CREATE_EMAIL_START,
    function* ({ payload: { email, password, displayName }, type }) {
      console.log(type);
      try {
        const { user } = yield emailAndPassword(auth, email, password);
        yield getSnapshotFromUserAuth(user, displayName);
      } catch (error) {
        yield put(signInFailure(error));
      }
    }
  );
}

export function* onCheckUserSession() {
  yield takeLatest(userActionsTypes.CHECK_USER_SESSION, function* () {
    try {
      const userAuth = yield getCurrentUser();
      if (!userAuth) return;
      yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
      yield put(signInFailure(error));
    }
  });
}

export function* onSignOutStart() {
  yield takeLatest(userActionsTypes.SIGN_OUT_START, function* () {
    try {
      yield auth.signOut();
      yield put(signOutSuccess());
    } catch (error) {
      put(signOutFailure(error));
    }
  });
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCreateAccountWithEmailAndPasswordStart),
    call(onCheckUserSession),
    call(onSignOutStart),
  ]);
}
