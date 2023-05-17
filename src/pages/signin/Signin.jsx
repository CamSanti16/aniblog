import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import {signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase"
import './signin.scss'

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const firebaseSignIn = (e) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, googleProvider);
            const user = res.user;
            const q = query(collection(db, "users"), where("uid", "==", user.uid));
            const docs = await getDocs(q);
            if (docs.docs.length === 0) {
              await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
              });
            }
          } catch (err) {
            console.error(err);
            alert(err.message);
          }
    }


  return <div className='background'>
    <div className='signInSection'> 
        <div className='signInBox'>
            <span className="logoCenter">
                <img className='logo' src='AniBlogLogo.svg' alt='AniBlog Logo' />
            </span>
                <div className="formWrapper">
                    <span className="inputWrapper">
                        <input value={email} onChange={(event) => setEmail(event.target.value)} type="text" className="centerWrapper inputBox" placeholder='Username or E-mail'>

                        </input>
                    </span>
                    <span className="inputWrapper">
                        <input value={password} onChange={(event) => setPassword(event.target.value)} type="text" className="centerWrapper inputBox" placeholder='Password'>

                        </input>
                    </span>
                    <span className="inputWrapper">
                        <button onClick={firebaseSignIn} className="centerWrapper signInButton">
                            Sign In
                        </button>
                    </span>
                    <span className="centerWrapper">
                        <span className="forgotPassword">
                            <a> Forgot Password </a> 
                        </span>
                        <span className="signUp d-flex justify-content-end">
                            Sign Up 
                        </span>
                    </span>
                    <span className="alignCenter">
                        or you can sign in with
                    </span>
                    <span className="alignCenter">
                    <FcGoogle onClick={signInWithGoogle} className="icon"/>
                    <FaFacebookF className="icon"/>
                    <AiFillGithub className="icon"/>

                    </span>
                </div>
        </div>
    </div>
</div>
}

export default SignIn
