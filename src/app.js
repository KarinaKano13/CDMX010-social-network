// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCE3V_6hn_oiPhJAvfRLJLygBVct9fIZRg',
  authDomain: 'novaapp-67e15.firebaseapp.com',
  projectId: 'novaapp-67e15',
  storageBucket: 'novaapp-67e15.appspot.com',
  messagingSenderId: '282489634860',
  appId: '1:282489634860:web:97a4ad5b81716f2b0f5189',
  measurementId: 'G-N31JQDJTSM',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const db = firebase.firestore();

const docRef = db.doc('newPost/Title');
const cardContainer = document.getElementById('cardContainer');
const cardTitle = document.getElementById('title');
const cardSubtitle = document.getElementById('subtitle');
const button = document.getElementById('saveButton');

export const createPost = button.addEventListener('click', (e) => {
  e.preventDefault();
  const textToSave = cardTitle.value;
  console.log(`Im going to save ${textToSave} to Firestore`);
  docRef.set({
    Title: textToSave,
  });
});
