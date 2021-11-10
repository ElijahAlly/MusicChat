import { useEffect } from 'react';
import Navbar from '../components/navbar';
import OtherAuthOptions from '../components/other_auth_options';
import UsernameGuidelines from '../components/username_guidelines';
import checkUsernameGuidelines from '../lib/check_username_guidelines';

function SignUp() {
	useEffect(() => {
		checkUsernameGuidelines('');
        const usernameInput = document.getElementById('username-input');
        usernameInput?.focus();
	}, []);

	return (
		<section className='auth-page signup'>
			<Navbar loggedIn={false} />
			<section className='login-section'>
				<form className='login-form signup-form'>
					<label>Sign Up Here</label>
					<UsernameGuidelines />
					<input
						type='text'
						placeholder='Enter a username'
						className='form-input'
						id='username-input'
						onChange={(e) => checkUsernameGuidelines(e.currentTarget.value)}
					/>
					<button className='submit-btn' onClick={(e) => e.preventDefault()}>
						Next
					</button>
				</form>
				<OtherAuthOptions />
			</section>
		</section>
	);
}

export default SignUp;
