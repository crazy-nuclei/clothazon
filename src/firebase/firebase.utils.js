import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAA9Fnt1Zep4Nk6bWRN246LxHQSe-givMQ",
    authDomain: "clothazon.firebaseapp.com",
    projectId: "clothazon",
    storageBucket: "clothazon.appspot.com",
    messagingSenderId: "1055187979033",
    appId: "1:1055187979033:web:a062f8ca69403f9ff01388",
    measurementId: "G-J50M5FEMJV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    //console.log(userRef);
    //console.log(snapshot);

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;