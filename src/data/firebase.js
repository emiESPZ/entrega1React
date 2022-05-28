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
  apiKey: "AIzaSyC5XNcVA5GDWlgkS0xxV-VCmzg8M9Gzk2o",
  authDomain: "instrumentosmusicales-c9c50.firebaseapp.com",
  projectId: "instrumentosmusicales-c9c50",
  storageBucket: "instrumentosmusicales-c9c50.appspot.com",
  messagingSenderId: "883938748142",
  appId: "1:883938748142:web:824c647db4ba4d4966f5ff",
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
