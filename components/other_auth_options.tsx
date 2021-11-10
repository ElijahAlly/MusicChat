import Link from 'next/link';

function OtherAuthOptions() {
	return (
		<>
			<div className='or-splitter'>
				<div className='line'></div>
				<div className='or-split'>OR</div>
				<div className='line'></div>
			</div>
			<Link href='/generate-anonymous-username'>
				<a className='auth-btn'>Continue Anonymously</a>
			</Link>
		</>
	);
}

export default OtherAuthOptions;
