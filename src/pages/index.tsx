import { CallToAction } from '@markup/components/landing/CallToAction';
import { Features } from '@markup/components/landing/Features';
import { Footer } from '@markup/components/landing/Footer';
import { Hero } from '@markup/components/landing/Hero';
import { Navbar } from '@markup/components/shared/Navbar';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
	return (
		<>
			<Navbar />
			<div className="w-full border-t border-neutral-800" />
			<Hero />
			<div className="w-full border-t border-neutral-800" />
			<Features />
			<div className="w-full border-t border-neutral-800" />
			<CallToAction />
			<div className="w-full border-t border-neutral-800" />
			<Footer />
		</>
	);
};

export default HomePage;
