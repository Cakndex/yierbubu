import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
const firebaseConfig = {
  apiKey: 'AIzaSyBEYS8UtnIdaYA4aZHsFCE3rnSya_DdS8o',
  authDomain: 'yierbubu.firebaseapp.com',
  projectId: 'yierbubu',
  storageBucket: 'yierbubu.firebasestorage.app',
  messagingSenderId: '745521053033',
  appId: '1:745521053033:web:57602c1e935aa1cca811f8',
  measurementId: 'G-7TF1KMZJBQ',
  databaseURL:
    'https://yierbubu-default-rtdb.asia-southeast1.firebasedatabase.app'
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)
export default db
