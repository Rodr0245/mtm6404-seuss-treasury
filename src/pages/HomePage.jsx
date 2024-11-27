import React, { useRef, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Books from '../components/Books';
import FooterSection from '../components/FooterSection';

const HomePage = () => {
	const heroSectionRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			document.getElementById('scrollToTopButton').style.display = window.scrollY > (heroSectionRef.current?.offsetTop || 0) + (heroSectionRef.current?.offsetHeight || 0) ? 'initial' : 'none';
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<HeroSection ref={heroSectionRef} />
			<Books />
			<div>
				<button 
					id="scrollToTopButton" 
					type="button" 
					className="fixed bottom-4 right-4 p-4 bg-white rounded-full shadow-lg hover:bg-gray-100 transition ease duration-300" 
					style={{ display: 'none' }} 
					onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
				>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
					</svg>
				</button>
			</div>
		</>
	);
};

export default HomePage;

