import React, {useState} from 'react'
import { auth } from "../../firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './signup.scss'

const SignUp = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [comfirmedPassword, setComfirmedPassword] = useState("");

    const firebaseSignUp = (e) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return <div className='background'>
    <div className='signInSection'> 
        <div className='signInBox'>
            <span className="logoCenter">
                <img className='logo' src='AniBlogLogo.svg' alt='AniBlog Logo' />
            </span>
                <div className="formWrapper">
                    <span className="inputWrapper">
                        <input type="text" onChange={(event) => setUsername(event.target.value)} className="centerWrapper inputBox" placeholder='Username'>

                        </input>
                    </span>
                    <span className="inputWrapper">
                        <input type="password" onChange={(event) => setPassword(event.target.value)} className="centerWrapper inputBox" placeholder='Password'>

                        </input>
                    </span>
                    <span className="inputWrapper">
                        <input type="password" onChange={(event) => setComfirmedPassword(event.target.value)} className="centerWrapper inputBox" placeholder='Comfirm Password'>

                        </input>
                    </span>
                    <span className="inputWrapper">
                        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} className="centerWrapper inputBox" placeholder='E-mail Address'>

                        </input>
                    </span>
                    <span className="inputWrapper">
                        <button onClick={firebaseSignUp} className="centerWrapper signInButton">
                            Sign Up
                        </button>
                    </span>
                    <span className="centerWrapper alignCenter">
                        <span className="forgotPassword">
                            <a className="linkFormat signInLink" href='/signin'>  Have an Account? </a> 
                            <a className="linkFormat" href='/signin'> Sign In </a> 
                        </span>
                    </span>
                </div>
        </div>
    </div>
</div>
}


export default SignUp