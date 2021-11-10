function UsernameGuidelines() {
	return (
		<>
			<h3 className='guideline-header'>Usernames should:</h3>
			<h4 className='guideline' id='two-chars-long'>be at least 2 characters long</h4>
			<h4 className='guideline' id='no-special-chars'>
				only contain numbers, letters, underscores {`"_"`}
			</h4>
		</>
	);
}

export default UsernameGuidelines;
