import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAWXj79c99BSEkvFNBO5Xj7hDL7l6c9ZFQ",
  authDomain: "devlinksgp.firebaseapp.com",
  projectId: "devlinksgp",
  storageBucket: "devlinksgp.appspot.com",
  messagingSenderId: "408472935514",
  appId: "1:408472935514:web:a52490cc3d1788a899cc63",
  measurementId: "G-20BLGYP8K3"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export {db, auth}