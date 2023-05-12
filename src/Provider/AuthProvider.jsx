import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("currentUser", currentUser);
            setLoading(false)
        })
        return ()=>{
            return unsubscribe();
        }
    }, [])

    const userSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
          })
    }

    const authInfo = {
        user,
        loading,
        userSignUp,
        userSignIn,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;