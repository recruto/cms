import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyCOk_6ScUzhufwGiX0FhJ5sbu8OHnH3m7A',
  authDomain: 'recru-to.firebaseapp.com',
  databaseURL: 'https://recru-to.firebaseio.com',
  projectId: 'recru-to',
  storageBucket: 'recru-to.appspot.com',
  messagingSenderId: '373094688113',
  appId: '1:373094688113:web:e8e2bdca08d7a7876f02d0',
})

export function signIn() {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().useDeviceLanguage()
  return firebase.auth().signInWithRedirect(provider)
}

export function signOut() {
  return firebase.auth().signOut()
}

export default firebase
