import { CallToAction } from '@markup/components/landing/CallToAction';
import { Features } from '@markup/components/landing/Features';
import { Footer } from '@markup/components/landing/Footer';
import { Hero } from '@markup/components/landing/Hero';
import { Divider } from '@markup/components/shared/Divider';
import { Navbar } from '@markup/components/shared/Navbar';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
	return (
		<>
			<Navbar />
			<Divider />
			<Hero />
			<Divider />
			<Features />
			<Divider />
			<CallToAction />
			<Divider />
			<Footer />
		</>
	);
};

export default HomePage;
