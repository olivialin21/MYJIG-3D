import emailjs from 'emailjs-com';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// INITIALIZE FIREBASE
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

firebase.initializeApp(firebaseConfig);
// ENABLE DATA PERSISTANCE
firebase.firestore().settings({
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
});
const store = firebase.firestore();
store.enablePersistence()
.catch(function(err) {
    if (err.code === 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
        console.log(err.code);
    } else if (err.code === 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
        console.log(err.code);
    }
});

const allPostsCollectionRef = store.collection("Posts");
const auth = firebase.auth();

export const signInWithEmailPassword = async (email, password) => {
  return await auth.signInWithEmailAndPassword(email, password);
}

export const registerWithEmailPassword = async (email, password, displayName) => {
  await auth.createUserWithEmailAndPassword(email, password);
  const user = auth.currentUser;
  await user.updateProfile({ displayName })
  return user;
}

export const updateUserInfoApi = async (email, password, displayName) => {
  const user = auth.currentUser;
  if(displayName)
    await user.updateProfile({ displayName });
  if(email)
    await user.updateEmail(String(email));
  if(password)
    await user.updatePassword(password);
  return user;
}

export const createPost = async (content) => {
  const user = auth.currentUser.displayName;
  const email = auth.currentUser.email;
  const time = firebase.firestore.FieldValue.serverTimestamp();
  const PostsRef = await allPostsCollectionRef.doc();
  const id = PostsRef.id;
  const applications = 0;
  // Store Data for Aggregation Queries
  await PostsRef.set({
    ...content,
    id,
    time,
    user,
    applications,
    email
  });
  return { ...content, id };
}

export const getPosts = async () => {
  let posts = [];
  let querySnapshot = await allPostsCollectionRef.get();
  querySnapshot.forEach((doc) => {
    posts.push(doc.data());
  });
  return posts;
}

export const signOut = () => {
  auth.signOut();
}

export const checkLoginApi = () => {
  const user = auth.currentUser;
  return user.uid?  true : false;
}

export const sendEmailToClient = async (emailInfo) => { 
  const doc = await allPostsCollectionRef.doc(emailInfo.id).get();
  const applicationsNum = doc.data().applications;

  let templateParams = {
    "client_name": emailInfo.name,
    "creator_name": auth.currentUser.displayName,
    "title" : emailInfo.title,
    "message" : emailInfo.applyContent,
    "client_email": emailInfo.emailTo
  }

  const service_id = 'default_service';
  const template_id = 'myjig3d';
  let userID = "user_eyNcfozLP0P4wI4wui3te"
  emailjs.send(service_id, template_id, templateParams,userID)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      allPostsCollectionRef.doc(emailInfo.id).update("applications", applicationsNum + 1 );
    })
    .catch((error) => {
      console.log('FAILED...', error);
    })
}