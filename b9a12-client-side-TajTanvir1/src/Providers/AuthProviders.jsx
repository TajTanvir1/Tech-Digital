import {
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   GoogleAuthProvider,
   updateProfile
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const axiosPublic = useAxiosPublic();


   // Create User with Email And Password
   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };



   const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const googleProvider = new GoogleAuthProvider();

   const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };


   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   };

   const updateUserProfile = (name, photo) =>{
      return updateProfile(auth.currentUser, {
         displayName: name, PhotoURl: photo
      })
   }

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         // console.log("user in the auth state changed", currentUser);
         setUser(currentUser);
         if(currentUser){
            // Get token and Store Client
            const userInfo = {email: currentUser.email};
            axiosPublic.post('jwt', userInfo)
            .then(res => {
               if(res.data.token){
                  localStorage.setItem('access-token', res.data.token);
               }
            })
         }
         else{
            // TODO: remove token
            localStorage.removeItem('access-token');
         }
         setLoading(false);
      });
      return () => {
         unSubscribe();
      };
   }, [axiosPublic]);

   const authInfo = {
      user,
      createUser,
      loading,
      setLoading,
      logOut,
      signIn,
      googleLogin,
      updateUserProfile
   };

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProviders;
