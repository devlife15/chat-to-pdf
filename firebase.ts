import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAefCir_18kEvWLyzmDA0Le_Ac6hs4qFeM",
  authDomain: "chat-with-pdf-ed222.firebaseapp.com",
  projectId: "chat-with-pdf-ed222",
  storageBucket: "chat-with-pdf-ed222.appspot.com",
  messagingSenderId: "126096870329",
  appId: "1:126096870329:web:709fd38f97ee6fadaac468",
  measurementId: "G-QK87G0LKC6",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { db, storage, analytics };
