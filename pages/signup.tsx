import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import OtherAuthOptions from '../components/other_auth_options';
import UsernameGuidelines from '../components/username_guidelines';
import checkUsernameGuidelines from '../lib/check_username_guidelines';

interface User {
	username: string;
	email: string;
	password: string;
}

function SignUp() {
	const [userInfo, setUserInfo] = useState<User>({
		username: '',
		email: '',
		password: '',
	});
	const [formCount, setFormCount] = useState(0);
	const [lengthCheck, setLengthCheck] = useState<HTMLElement | null>(null);
	const [specialCharsCheck, setSpecialCharsCheck] =
		useState<HTMLElement | null>(null);
	const [passwordType1, setPasswordType1] = useState('password');
	const [passwordType2, setPasswordType2] = useState('password');
	const showPassword = ['SHOW', 'HIDE'];

	const togglePasswordType1 = () => {
		if (passwordType1 === 'password') {
			setPasswordType1('text');
		} else {
			setPasswordType1('password');
		}
	};

	const togglePasswordType2 = () => {
		if (passwordType2 === 'password') {
			setPasswordType2('text');
		} else {
			setPasswordType2('password');
		}
	};

	useEffect(() => {
		setLengthCheck(document.getElementById('two-chars-long'));
		setSpecialCharsCheck(document.getElementById('no-special-chars'));
		checkUsernameGuidelines('', lengthCheck, specialCharsCheck);
		const usernameInput = document.getElementById('username-input');
		usernameInput?.focus();
	}, []);

	useEffect(() => {
		checkUsernameGuidelines(userInfo.username, lengthCheck, specialCharsCheck);
	}, [userInfo, setUserInfo]);

	return (
		<section className='auth-page signup'>
			<Navbar loggedIn={false} />
			<section className='login-section'>
				<form className='login-form signup-form'>
					<label>Sign Up Here</label>
					{formCount === 0 && (
						<>
							<UsernameGuidelines />
							<input
								type='text'
								placeholder='Enter a username'
								className='form-input'
								id='username-input'
								onChange={(e) => {
									setUserInfo({
										...userInfo,
										username: e.currentTarget.value,
									});
								}}
							/>
						</>
					)}
					{formCount === 1 && (
						<>
							<input
								type='email'
								placeholder='Enter your email'
								className='form-input'
								onChange={(e) =>
									setUserInfo({ ...userInfo, email: e.currentTarget.value })
								}
							/>
						</>
					)}
					{formCount === 2 && (
						<>
							<div className='password-container'>
								<h3 className='show-password' onClick={togglePasswordType1}>
									{passwordType1 === 'password'
										? showPassword[0]
										: showPassword[1]}
								</h3>
								<input
									type={passwordType1}
									placeholder='Enter a password'
									className='form-input'
									onChange={(e) =>
										setUserInfo({
											...userInfo,
											password: e.currentTarget.value,
										})
									}
								/>
							</div>
							<div className='password-container'>
								<h3 className='show-password' onClick={togglePasswordType2}>
									{passwordType2 === 'password'
										? showPassword[0]
										: showPassword[1]}
								</h3>
								<input
									type={passwordType2}
									placeholder='Confirm password'
									className='form-input'
									onChange={(e) =>
										setUserInfo({
											...userInfo,
											password: e.currentTarget.value,
										})
									}
								/>
							</div>
						</>
					)}
					<button
						className='submit-btn'
						onClick={(e) => {
							e.preventDefault();
							setFormCount((prev) => prev + 1);
						}}>
						Next
					</button>
				</form>
				<OtherAuthOptions />
			</section>
		</section>
	);
}

export default SignUp;
