import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  onSnapshot,
  writeBatch,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYBEH3YJvUb7qjz4P82LpaoWLriyU6lAY",
  authDomain: "the-cloths-place.firebaseapp.com",
  projectId: "the-cloths-place",
  storageBucket: "the-cloths-place.appspot.com",
  messagingSenderId: "539026914942",
  appId: "1:539026914942:web:dd5161fab77af61b25622f",
  measurementId: "G-CFEYR136KK",
};

// Initialize Firebase
const theClothPlace = initializeApp(firebaseConfig);

// export Auth Services
export const auth = getAuth(theClothPlace);
auth.languageCode = "it";
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
  login_hint: "user@example.com",
});
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const changedState = onAuthStateChanged;

// export database Services
export const database = getFirestore(theClothPlace);

// Store user data in Database
export const createUserProfileDocument = async (
  userAuthObj,
  name,
  additionalData
) => {
  if (!userAuthObj) return;
  const collectionRef = collection(database, "users");
  const userRef = doc(collectionRef, userAuthObj.uid);
  const docSnap = await getDoc(userRef);
  if (!docSnap.exists()) {
    const { displayName, photoURL, email, uid } = userAuthObj;
    const createdAt = new Date();
    try {
      await setDoc(doc(collectionRef, userAuthObj.uid), {
        displayName: displayName ? displayName : name && null,
        email,
        photoURL,
        userID: uid,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error adding user: ", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(database);
  const collectionsRef = collection(database, collectionKey);
  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionsRef, obj.title);
    batch.set(newDocRef, obj);
  });

  await batch.commit();
};

// Get back the collection documents
export const convertCollectionsToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items,
    };
  });
  return transformedCollections.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((res, rej) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        res(userAuth);
      },
      rej
    );
  });
};

export const snapShot = onSnapshot;
export const emailAndPassword = createUserWithEmailAndPassword;
export const signInWithEmail = signInWithEmailAndPassword;
