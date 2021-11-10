import Navbar from '../components/navbar';
import Link from 'next/link';
import {
	uniqueNamesGenerator,
	Config,
	adjectives,
	colors,
	animals,
} from 'unique-names-generator';
import { useState } from 'react';
import UsernameGuidelines from '../components/username_guidelines';
import check_username_guidelines from '../lib/check_username_guidelines';

const config: Config = {
    dictionaries: [adjectives, colors, animals],
    separator: '_',
};

function GenerateAnonymousUsername() {
    const [separator, setSeparator] = useState('_');
	const [username, setUsername] = useState(uniqueNamesGenerator(config));

    const handleUnderscores = (username: string) => {
        if (separator === '_') return username;

        let newUsername = '';

        for (let i = 0; i < username.length; i++) {
            if (username[i] === '_') {
                continue;
            }

            newUsername += username[i];
        }

        return newUsername;
    }   

	return (
		<>
			<Navbar loggedIn={false} />
			<section className='anonymous-section'>
				<form className='anonymous-form'>
                    <UsernameGuidelines />
					<input
						type='text'
						className='form-input'
						onChange={(e) => 
                            setUsername(e.currentTarget.value)
                        }
						value={check_username_guidelines(handleUnderscores(username))}
                        id='username-input'
					/>
                    <div className='btn-container'>
                        <button
                            className='submit-btn'
                            onClick={(e) => {
                                e.preventDefault();
                                setUsername(uniqueNamesGenerator(config));
                            }}>
                            Generate A Random Username
                        </button>
                        <button className='submit-btn underscore-btn' onClick={(e) => {e.preventDefault();setSeparator((prev) => prev === '_' ? '' : '_')}}>
                            {separator === '_' ? 'Without' : 'With'} underscores {`"_"`}
                        </button>
                    </div>
				</form>
				<Link href='/'>
					<a className='auth-btn'>Continue</a>
				</Link>
			</section>
		</>
	);
};

export default GenerateAnonymousUsername;
