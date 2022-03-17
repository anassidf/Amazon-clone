// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCfBDF4IDbBsDSwY6CGPik9rC9dBHNDvCg',
	authDomain: 'e-commerce-208d6.firebaseapp.com',
	projectId: 'e-commerce-208d6',
	storageBucket: 'e-commerce-208d6.appspot.com',
	messagingSenderId: '231414443978',
	appId: '1:231414443978:web:4827e435b2f5f2fe8d2933',
	measurementId: 'G-YEXC9LDRCY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };
