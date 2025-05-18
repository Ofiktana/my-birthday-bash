// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  onSnapshot,
  doc,
  deleteDoc,
  getDoc,
  updateDoc
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "my-birthday-bash.firebaseapp.com",
  projectId: "my-birthday-bash",
  storageBucket: "my-birthday-bash.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//DATABASE

const db = getFirestore(app);

export async function addNewDoc(collectionName, data) {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);

    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    throw new Error("Error adding document: ", error);
  }
}

export async function listenToCollection(collectionName, callback) {
  const q = query(collection(db, collectionName));

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const dataset = [];

    querySnapshot.forEach((doc) => {
      const docObject = doc.data();
      docObject.id = doc.id;

      dataset.push(docObject);
    });

    callback(dataset);
  });
}

export async function deleteData(collectionName, id) {
  await deleteDoc(doc(db, collectionName, id));
}

export async function getPasscode() {
  const docSnap = await getDoc(doc(db, "settings", "1"));

  if (docSnap.exists()) {
    return docSnap.data().passcode;
  } else {
    console.log("No such document");
  }
}

export async function updateData(collectionName, id, data){
  const docRef = doc(db, collectionName, id)

  await updateDoc(docRef, data)
}
