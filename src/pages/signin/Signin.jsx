import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import {signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";
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

    const facebookProvider = new FacebookAuthProvider();
    const signInWithFacebook = async () => {
        try {
            const res = await signInWithPopup(auth, facebookProvider);
            const user = res.user;
            const q = query(collection(db, "users"), where("uid", "==", user.uid));
            const docs = await getDocs(q);
            if (docs.docs.length === 0) {
              await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "facebook",
                email: user.email,
              });
            }
          } catch (err) {
            console.error(err);
            alert(err.message);
          }
    }

    const githubProvider = new GithubAuthProvider();
    const signInWithGitHub = async () => {
        try {
            const res = await signInWithPopup(auth, githubProvider);
            const user = res.user;
            const q = query(collection(db, "users"), where("uid", "==", user.uid));
            const docs = await getDocs(q);
            if (docs.docs.length === 0) {
              await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "github",
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
                        <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" className="centerWrapper inputBox" placeholder='Password'>

                        </input>
                    </span>
                    <span className="inputWrapper">
                        <button onClick={firebaseSignIn} className="centerWrapper signInButton">
                            Sign In
                        </button>
                    </span>
                    <span className="centerWrapper">
                        <span className="forgotPassword">
                            <a href='' className="linkFormat"> Forgot Password? </a> 
                        </span>
                        <a href='/signup' className="signUp d-flex justify-content-end linkFormat">
                            Sign Up
                        </a>
                    </span>
                    <span className="alignCenter" style={{color: 'rgba(0, 0, 0, 0.65)'}}>
                        or you can sign in with
                    </span>
                    <span className="alignCenter">
                    <FcGoogle onClick={signInWithGoogle} className="icon G"/>
                    <FaFacebookF onClick={signInWithFacebook} style={{color:'#4267B2'}} className="icon FB"/>
                    <AiFillGithub onClick={signInWithGitHub} style={{color:'#171515'}} className="icon GH"/>

                    </span>
                </div>
        </div>
    </div>
</div>
}

export default SignIn
