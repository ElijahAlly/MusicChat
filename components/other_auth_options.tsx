import Link from 'next/link';

interface OtherAuthOptionsParams {
	login: boolean;
}

function OtherAuthOptions({ login }: OtherAuthOptionsParams) {
	return (
		<>
			<div className='or-splitter'>
				<div className='line'></div>
				<div className='or-split'>OR</div>
				<div className='line'></div>
			</div>
			<Link href={`/${login ? 'login' : 'signup'}`}>
				<a className='auth-btn'>{login ? 'Log In' : 'Sign Up'}</a>
			</Link>
			<Link href='/generate-anonymous-username'>
				<a className='auth-btn'>Continue Anonymously</a>
			</Link>
		</>
	);
}

export default OtherAuthOptions;
