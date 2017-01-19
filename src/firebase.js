import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyC0Tpy9a7mJF8ZBTnQpxPDsb9J0SGZ2Rnw',
  authDomain: 'platzimusicreactnative.firebaseapp.com',
  databaseURL: 'https://platzimusicreactnative.firebaseio.com',
  storageBucket: 'platzimusicreactnative.appspot.com',
  messagingSenderId: '654043733386',
};

firebase.initializeApp(config);
export const firebaseAuth = firebase.auth();
export const firebaseDatabase = firebase.database();
export default firebase;
