import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyDhwMyRp_MutX6HBEd6wzDvoM1qNWBV2e0",
  authDomain: "netflix-clone-f72f7.firebaseapp.com",
  projectId: "netflix-clone-f72f7",
  storageBucket: "netflix-clone-f72f7.firebasestorage.app",
  messagingSenderId: "647029352727",
  appId: "1:647029352727:web:f57b9452b5751869bc6f52"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try{
       const res = await createUserWithEmailAndPassword(auth, email, password);
       const user = res.user;
       await addDoc(collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
       });
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }

}

const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);

    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout =  () =>{
    signOut(auth);
}

export {auth, db, login, signup, logout};