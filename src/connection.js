const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const firebaseToken = require('../config/apinode-bootforce-firebase-adminsdk-t9y9z-dc02033610.json');

initializeApp({
  credential: cert(firebaseToken)
});

const firebase = getFirestore();
