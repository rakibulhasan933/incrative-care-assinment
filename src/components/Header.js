import React from 'react';

const Header = () => {
	return (
		<div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold">Enhance Your Learning</h1>
					<button className="btn btn-primary">Get Started Learning</button>
				</div>
			</div>
		</div>
	);
};

export default Header;