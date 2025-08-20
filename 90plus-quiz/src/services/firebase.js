import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjsy5IcJE0QMDaQRN15nmWqPW-aC42uSI",
  authDomain: "plus-quiz-a051c.firebaseapp.com",
  projectId: "plus-quiz-a051c",
  storageBucket: "plus-quiz-a051c.firebasestorage.app",
  messagingSenderId: "142696148349",
  appId: "1:142696148349:web:1cbfdf8cd4c00388857014",
  measurementId: "G-9N13LSC1XG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);
const functions = getFunctions(app);

// Optional: Connect to emulators in development
// if (process.env.NODE_ENV === 'development') {
//   connectFirestoreEmulator(db, 'localhost', 8080);
//   connectAuthEmulator(auth, 'http://localhost:9099');
//   connectFunctionsEmulator(functions, 'localhost', 5001);
// }

export { db, auth, functions };
export default app;