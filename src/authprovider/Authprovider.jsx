import { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase";
import useaxiouspublic from "../hooks/useaxiouspublic";



export const authcontext = createContext(null);
const Authprovider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  const axiouspublic=useaxiouspublic()

  const createuser = (email, password) => {
    setloading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
    
      setuser(currentuser);
      if(currentuser){
        const userinfo={email:currentuser.email};
        axiouspublic.post('/jwt',userinfo)
        .then(res=>{
          if(res.data.token){
            localStorage.setItem( 'access-token',res.data.token)
          }
        })
      }
      else{
       localStorage.removeItem('access-token')
      }

      setloading(false);
 
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const login = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setloading(true);
    return signOut(auth);
  };

  const authinfo = {
    user,
    loading,
    createuser,
    login,
    logout,
  };

  return (
    <authcontext.Provider value={authinfo}>{children}</authcontext.Provider>
  );
};

export default Authprovider;