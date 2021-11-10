import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';

interface NavbarProps {
	loggedIn: boolean;
}

const Navbar = (props: NavbarProps) => {
    const {loggedIn} = props;

    let onSignUp = false;
    let onLogIn = false;

    useEffect(() => {
        const signupELe = document.getElementById('signup-link');
        const loginELe = document.getElementById('login-link');
        onSignUp = window.location.href.includes('signup');
        onLogIn = window.location.href.includes('login');

        if (onSignUp) signupELe?.classList.add('active-link');
        if (onLogIn) loginELe?.classList.add('active-link');
    })
    
    return (
		<>
			<Head>
				<title>Music Chat</title>
				<meta name='description' content='Listen to music and chat others!' />
			</Head>
			<section className='navbar'>
                    <div className='app-info'>
                        {/* <Link href='/' passHref>
                            <Image src='/music-app.png' alt='app logo' height='40' width='40' />
                        </Link> */}
                        <Link href='/' passHref>
                            <h1 className='app-name'>Music Chat</h1>
                        </Link>
                    </div>
				<div className='nav-links'>
                    {loggedIn ? (
                        <>
                            <h2>Welcome username!</h2>
                        </>
                    ) : (
                        <>
                            <Link href='/signup'>
                                <a id='signup-link' className='link'>Sign Up</a>
                            </Link>
                            <Link href='/login'>
                                <a id='login-link' className='link'>Log In</a>
                            </Link>
                        </>
                    )}
				</div>
			</section>
		</>
	);
};

export default Navbar;
