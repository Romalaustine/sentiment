import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import { seedDatabase } from '../seed'

//config

const config = {
    apiKey: "AIzaSyAy7xbPjGDSGJLZiZUyJj5uL3_-oS2vcCE",
    authDomain: "sentiment-d95d5.firebaseapp.com",
    projectId: "sentiment-d95d5",
    storageBucket: "sentiment-d95d5.appspot.com",
    messagingSenderId: "283389874586",
    appId: "1:283389874586:web:9ab7c8870a7026e7bd6a23"
}

const firebase = Firebase.initializeApp(config)

// seedDatabase(firebase)

export { firebase }