import * as firebase from 'firebase/app'  
import 'firebase/storage';
import 'firebase/database';

let firebaseApp = null

const config = {
  apiKey: "AIzaSyD13hX-WKrjeFYl9NoMaROsGRpxSbEUONk",
  authDomain: "socialapp-irav.firebaseapp.com",
  databaseURL: "https://socialapp-irav.firebaseio.com",
  projectId: "socialapp-irav",
  storageBucket: "socialapp-irav.appspot.com",
  messagingSenderId: "381930007179"

}

if(!firebase.apps.length) {
 firebase.initializeApp(config)
}

const db = firebase.database()
const storage = firebase.storage()

export { firebase, storage, db }
