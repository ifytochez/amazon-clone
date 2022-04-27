import React from 'react'
import './Login.css';
import Logo from './logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from "./firebase";

function Login() {
    // this is how you write variables in react. anything before the return is what i mean
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            navigate('/');
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
            if (auth) {
                navigate('/');
            }
        })
        .catch(error => alert(error.message))
    }


    return (
    <div className='login'>
        <Link to="/">
            <img className="login-logo" src={Logo} alt="logo" />
       </Link>

       <div className='login_container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange = {e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={password} onChange = {e => setPassword(e.target.value)}/>

                <button className='login_signInButton' type='submit' onClick={signIn}>Sign In</button>

            </form>

            <p>
                By signing-in, you agree to the Amazon fake clone Condition of Use & Sale.
                Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button className='login_registerButton' onClick={register}>Create you Amazon Account</button>
       </div>
    </div>
  )
}

export default Login



// firebase was installed in the terminal using npm i firebase