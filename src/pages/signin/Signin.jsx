import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import './signin.scss'

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const firebaseSignIn = (e) => {
        console.log("this is the email " + email)
    }
  return <div className='background'>
    <div className='signInSection'> 
        <div className='signInBox'>
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
                        <span>
                            Forgot Password?
                        </span>
                        <span>
                            Sign Up 
                        </span>
                    </span>
                    <span>
                        or you can sign in with  dwin
                    </span>
                    <span>
                    <FcGoogle />
                    <FaFacebookF />
                    <AiFillGithub />

                    </span>
                </div>
        </div>
    </div>
</div>
}

export default SignIn
