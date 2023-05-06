import React, { useState, createContext, useCallback, useMemo } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/FIREBASE_SDK";
import { toast } from "react-toastify";

export const AuthContextProvider = createContext({});

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //? CREATE A USER AND SEND THEM TO HOME PAGE
  const handleCreateUserAccount = useCallback(async ({ email, password }) => {
    setIsLoading(true);
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const userInformation = userCredential.user;
          setUser(userInformation);
          console.log(userCredential);
          toast.success(` You are logged in as ${userCredential.email} ✅`);
          setIsLoading(false);
        })
        .catch((error) => {
          const errorObject = error.message.split("(auth/");
          const errorText = errorObject[1].substring(
            0,
            errorObject[1].length - 2
          );
          setErrorMessage(errorText);
          toast.error(`${errorText} ❌`);
          setIsLoading(false);
        });
    } catch (error) {
      toast.error(`Sorry something went wrong ☹ ${error.message}`);
      setIsLoading(false);
    }
  }, []);

  //? LOG IN A USER WITH EMAIL AND PASS WORD AND SEND THEM TO HOME PAGE
  const handleLoginUserAccount = useCallback(async ({ email, password }) => {
    setIsLoading(true);
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const userInformation = userCredential.user;
          setUser(userInformation);
          toast.success(`You are logged in as ${userCredential.email} ✅`);
          setIsLoading(false);
          console.log(userCredential.email);
        })
        .catch((error) => {
          console.log(error.message);
          const errorObject = error.message.split("(auth/");
          const errorText = errorObject[1].substring(
            0,
            errorObject[1].length - 2
          );
          setErrorMessage(errorText);
          toast.error(`${errorText} ❌`);
          setIsLoading(false);
        });
    } catch (error) {
      toast.error(`Sorry something went wrong ☹ ${error.message}`);
      setIsLoading(false);
    }
  }, []);

  const memoizedAuthContextValues = useMemo(
    () => ({
      user,
      isLoading,
      errorMessage,
      handleCreateUserAccount,
      handleLoginUserAccount,
    }),
    [
      user,
      isLoading,
      errorMessage,
      handleCreateUserAccount,
      handleLoginUserAccount,
    ]
  );

  return (
    <AuthContextProvider.Provider value={memoizedAuthContextValues}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthContext;
