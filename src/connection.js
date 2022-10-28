const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const firebaseToken = require('../config/#');

initializeApp({
  credential: cert(firebaseToken)
});

const firebase = getFirestore();
