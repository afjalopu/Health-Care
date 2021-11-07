import { useState, useEffect } from "react";
import initializeAuthentication from "./../Firebase/Firebase.init";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    FacebookAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

        useEffect(() => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user);
                }else {
                    setUser({});
                }
            });
        }, []);

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                 setError( error );
            });
    };
    const signInUsingFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const signInUsingForm = (event) => {
        event.preventDefault();
        const email = event.target["email"].value;
        const password = event.target["password"].value;

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                const errorCode = error?.code;

                const errorMessage =
                    errorCode === "auth/user-not-found"
                        ? "Invalid username or password"
                        : error.message;

                setError(errorMessage);
            });
    };

    const signupUsingForm = (event) => {
        event.preventDefault();
        const email = event.target["email"].value;
        const password = event.target["password"].value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        });
    };

    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        signInUsingForm,
        signInUsingFacebook,
        signupUsingForm,
    };
};

export default useFirebase;
