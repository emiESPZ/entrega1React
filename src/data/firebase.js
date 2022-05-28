import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  query,
  where,
  collection,
  getdocs,
  getDocs,
  setDoc,
  Timestamp,
  addDoc,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

const app = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(app);

export default firestoreDB;

export async function getAllItems() {
  const miColec = collection(firestoreDB, "instrumentos");
  // getDocs(miColec).then(result=> miVariable = result)
  const instrumentSnap = await getDocs(miColec);

  return instrumentSnap.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
}

export async function getItemsByCategory(instrumentId) {
  const miColec = collection(firestoreDB, "instrumentos");
  const queryInstrument = query(
    miColec,
    where("instrument", "==", instrumentId)
  );
  const instrumentSnap = await getDocs(queryInstrument);
  return instrumentSnap.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
}

export async function getItem(id) {
  const miColec = collection(firestoreDB, "instrumentos");
  const docRef = doc(miColec, id);
  const instrumentSnap = await getDoc(docRef);

  return { ...instrumentSnap.data(), id: instrumentSnap.id };
}

export async function createBuyOrder(orderData) {
  const buyTimestamp = Timestamp.now();
  const orderWithDate = { ...orderData, date: buyTimestamp };

  const miColec = collection(firestoreDB, "buyOrders");
  const orderDoc = await addDoc(miColec, orderWithDate);
  return;
  console.log("Orden lista:", orderDoc.id);
}
