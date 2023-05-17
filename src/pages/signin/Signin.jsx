import React, { useState } from 'react'
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
                SignIn
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
                        or you can sign in with 
                    </span>
                    <span>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-google"></i>

                    </span>
                </div>
        </div>
    </div>
</div>
}

export default SignIn
