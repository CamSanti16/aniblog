import React from 'react'
import './signin.scss'

const SignIn = () => {
  return <div className='background'>
    <div className='signInSection'> 
        <div className='signInBox'>
                SignIn
                <div className="formWrapper">
                    <span className="inputWrapper">
                        <input className="centerWrapper inputBox" placeholder='Username or E-mail'>

                        </input>
                    </span>
                    <span className="inputWrapper">
                        <input className=" centerWrapper inputBox" placeholder='Password'>

                        </input>
                    </span>
                    <span className="inputWrapper">
                        <button className="centerWrapper signInButton">
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
                </div>
        </div>
    </div>
</div>
}

export default SignIn
