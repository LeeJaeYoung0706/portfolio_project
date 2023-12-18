// import {MongoClient} from "mongodb";
//
//
// const url = `mongodb+srv://${process.env.mongodb_id}:${process.env.mongodb_pwd}@cluster0.oqan7ou.mongodb.net/?retryWrites=true&w=majority`;
//
// let connectDB: Promise<MongoClient>
//
// if (process.env.NODE_ENV === 'development') {
//   if (!global._mongo) {
//     global._mongo = new MongoClient(url).connect()
//   }
//   connectDB = global._mongo
// } else {
//   connectDB = new MongoClient(url).connect()
// }
//
//
// export {connectDB}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {collection, getDocs} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_authDomain,
  projectId: "toyproject-portpolio",
  storageBucket: "toyproject-portpolio.appspot.com",
  messagingSenderId:  process.env.FIREBASE_messagingSenderId,
  appId: process.env.FIREBASE_appId,
  measurementId: process.env.FIREBASE_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
