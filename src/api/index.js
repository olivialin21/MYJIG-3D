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


// REFERENCE PRODUCTS
// const productsCollectionRef = store.collection("products");
// const productsDocRef = productsCollectionRef.doc("json");
// const allProductsCollectionRef = productsDocRef.collection("allProducts");
const allPostsCollectionRef = store.collection("Posts");

//REFERENCE AUTH
const auth = firebase.auth();

// export const getProductById = async (productId) => {
//   // REFERENCE PRODUCTS COLLECTION
//   const doc = await allProductsCollectionRef.doc(productId).get();
//   return doc.data()
// }

// export const getProducts = async (url) => {
//   const collection = jsonInfo.find(element => element.url === url);
//   const collectionName = collection.name || "allProducts";
//   let jsonProducts = [];

//   // QUERY PRODUCTS
//   let querySnapshot;
//   if (collectionName === "allProducts")
//     querySnapshot = await allProductsCollectionRef.get();
//   else
//     querySnapshot = await allProductsCollectionRef.where("category", "==", collectionName).get();
//   querySnapshot.forEach((doc) => {
//     jsonProducts.push(doc.data());
//   });
//   return jsonProducts;
// }

// export const feedProducts = () => {
//   products.forEach((product) => {
//     const docRef = allProductsCollectionRef.doc();
//     const id = docRef.id;
//     const user = auth.currentUser.uid;

//     // Store Data for Aggregation Queries
//     docRef.set({
//       ...product,
//       user,
//       id
//     });
//   })
// }

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

// export const getOrderById = async (orderId) => {
//   const doc = await allPostsCollectionRef.onSnapshot( querySnapshot => {

//   });
//   return doc.data()
// }

// export const getOrderByUser = async () => {
//   const user = auth.currentUser.uid;
//   let jsonOrders = [];

//   // QUERY Orders
//   const querySnapshot = await allOrdersCollectionRef.where("user", "==", user).get();
//   querySnapshot.forEach((doc) => {
//     jsonOrders.push(doc.data());
//   });
//   return jsonOrders;
// }

export const signOut = () => {
  auth.signOut();
}

export const checkLoginApi = () => {
  const user = auth.currentUser;
  return user.uid?  true : false;
}

export const sendEmailToClient = (emailInfo) => {
  const user = auth.currentUser.displayName;
  window.Email.send({
    SecureToken : "4738c97c-7c45-4518-911b-90bc8a13e726",
    To : emailInfo.emailTo,
    From : "myjig.3d.official@gmail.com",
    Subject : user+" apply to your idea! Let's light it up!",
    Body : emailInfo.requirement
  }).then(
    message => alert(message)
  );
}