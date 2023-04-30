import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)


const auth = getAuth(app);
const AuthProviders = ({ children }) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    // const user={display:'muri kha'}
    // const user = null

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


const loggedOut=()=>{
    setLoading(true)
    return signOut(auth)
}

    useEffect(() => {
     const unsubscribe= onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observe', loggedUser)
            setUser(loggedUser)
            setLoading(false)
        })
        return()=>{
            unsubscribe();
        }
    })

    const authInfo = {
        user,
        createUser,
        singIn,
        loggedOut,
        loading,
    }
    return (
        <>
            <AuthContext.Provider value={authInfo}>

                {children}
            </AuthContext.Provider>
        </>
    );
};

export default AuthProviders;