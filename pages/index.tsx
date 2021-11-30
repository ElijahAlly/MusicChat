import type { NextPage } from 'next';
import AppDemoSection from '../components/grid_section';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import GridSection from '../components/grid_section';
// import { useSharedSongState } from '../components/shared_state';

const Home: NextPage = () => {
	return (
		<>
			<div className='page-cont'>
				<section className='grid-page'>
					<GridSection />
				</section>
			</div>
			<Navbar loggedIn={false} />
			<Footer />
		</>
	);
};

export default Home;