import emailjs from 'emailjs-com';

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
// import { getFirestore, collection, doc, setDoc, getDocs, updateDoc, serverTimestamp } from 'firebase/firestore';
import { getDatabase, ref, push, get, set } from 'firebase/database';

// INITIALIZE FIREBASE
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

const app = initializeApp(firebaseConfig);
// const store = getFirestore(app);
const database = getDatabase(app);
const auth = getAuth(app);

// ENABLE DATA PERSISTENCE
// Firebase v9 does not require explicit data persistence settings

export const signInWithEmailPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
}

export const registerWithEmailPassword = async (email, password, displayName) => {
  await createUserWithEmailAndPassword(auth, email, password);
  const user = auth.currentUser;
  await updateProfile(user, { displayName });
  return user;
}

export const updateUserInfoApi = async (email, password, displayName) => {
  const user = auth.currentUser;
  if (displayName)
    await updateProfile(user, { displayName });
  if (email)
    await user.updateEmail(email);
  if (password)
    await user.updatePassword(password);
  return user;
}

export const logOut = () => {
  signOut(auth);
}

export const checkLoginApi = () => {
  const user = auth.currentUser;
  return user ? true : false;
}

export const createPost = async (content) => {
  const user = auth.currentUser.displayName;
  const email = auth.currentUser.email;
  const time = new Date().getTime();
  const applications = 0;

  // Store Data
  await push(ref(database, "Posts"), {
    requirement: content.requirement,
    title: content.title,
    user,
    email,
    time,
    applications,
  });

  return { ...content };
}

export const getPosts = async () => {
  let posts = [];
  const PostsRef = ref(database, 'Posts');
  const snapshot = await get(PostsRef);

  if (snapshot.exists()) {
    snapshot.forEach((childSnapshot) => {
      posts.push(childSnapshot.val());
    });
  }

  return posts;
}

export const sendEmailToClient = async (emailInfo) => { 
//   let templateParams = {
//     "client_name": emailInfo.name,
//     "creator_name": auth.currentUser.displayName,
//     "title" : emailInfo.title,
//     "message" : emailInfo.applyContent,
//     "client_email": emailInfo.emailTo
//   }

//   const service_id = 'default_service';
//   const template_id = 'myjig3d';
//   let userID = "user_eyNcfozLP0P4wI4wui3te"
//   emailjs.send(service_id, template_id, templateParams,userID)
//     .then((response) => {
//       console.log('SUCCESS!', response.status, response.text);
//       set(ref(database, "student1/name"), "Apple");
//       .update("applications", applicationsNum + 1 );
//       return true;
//     })
//     .catch((error) => {
//       console.log('FAILED...', error);
//       return false;
//     })
}