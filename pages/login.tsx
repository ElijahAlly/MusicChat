import { useEffect, useState } from "react";
import Link from 'next/link';
import Navbar from "../components/navbar";


function LogIn() {
    const [passwordType, setPasswordType] = useState('password')
    const showPassword = ['SHOW', 'HIDE'];
    
    const togglePasswordType = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
        } else {
            setPasswordType('password');
        }
    }

    useEffect(() => {
        const usernameInput = document.getElementById('username-input');
        usernameInput?.focus();
    }, [])

    return (  
        <section className='auth-page login'>
            <Navbar loggedIn={false}/>
            <section className='login-section'>
                <form className='login-form'>
                    <input type="text" placeholder='Username or email' className='form-input' id='username-input'/>
                    <div className='password-container'>
                        <h3 className='show-password' onClick={togglePasswordType}>
                            {passwordType === 'password' ? showPassword[0] : showPassword[1]}
                        </h3>
                        <input type={passwordType} placeholder='Password' className='form-input'/>
                    </div>
                    <button className='submit-btn' onClick={(e) => e.preventDefault()}>Log In</button>
                </form>
                <Link href='/generate-anonymous-username'>
                    <a className='auth-btn'>Continue Anonymously</a>
                </Link>
            </section>
        </section>
    );
}

export default LogIn;
