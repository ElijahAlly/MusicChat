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

interface GAUProps {}

const config: Config = {
    dictionaries: [adjectives, colors, animals],
    separator: '_',
};

const GenerateAnonymousUsername = (props: GAUProps) => {
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
                    <h3 className='guideline-header'>Usernames should:</h3>
                    <h4 className='guideline'>be at least 2 characters long</h4>
                    <h4 className='guideline'>only contain numbers, letters, underscores "_"</h4>

					<input
						type='text'
						className='form-input'
						onChange={(e) => setUsername(e.currentTarget.value)}
						value={handleUnderscores(username)}
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
                            {separator === '_' ? 'Without' : 'With'} underscores "_"
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
