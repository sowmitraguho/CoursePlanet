import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import { app } from "../../firebase/firebase.config";


export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    } 
    const ProviderLogIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };
    const LogOut = () => {
       
        return signOut(auth);
    };
    
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    } 
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
          });

          return () => {
            unsubscribe();
          }
    }, []);


    const AuthInfo = {creatUser, signIn, LogOut, ProviderLogIn, user, loading};
    return (
        <AuthContext.Provider value={AuthInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;