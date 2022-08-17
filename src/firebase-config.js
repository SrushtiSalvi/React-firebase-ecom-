import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDCQ5OtSBYVc4guj4Icqr0_udKibxBx5LQ',
  authDomain: 'ecom-fba7b.firebaseapp.com',
  projectId: 'ecom-fba7b',
  storageBucket: 'ecom-fba7b.appspot.com',
  messagingSenderId: '842158911540',
  appId: '1:842158911540:web:c4c14c969578feb7015a61',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
