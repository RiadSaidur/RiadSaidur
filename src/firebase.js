import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'

import firebaseConfig from '@/firebaseConfig'

firebase.initializeApp(firebaseConfig)

firebase.analytics();

const db = firebase.firestore()
const projectCollection = db.collection('projects')
const messageCollection = db.collection('messages')

export {
  projectCollection,
  messageCollection
}