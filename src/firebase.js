import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

import firebaseConfig from '@/firebaseConfig'

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const projectCollection = db.collection('projects')

export {
  projectCollection
}