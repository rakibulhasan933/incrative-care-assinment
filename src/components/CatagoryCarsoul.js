import React from 'react';

const CatagoryCarsoul = () => {
	return (
		<div className="py-10 bg-cyan-100">
			<div className="py-10 m-20">
				<div>
					<h2 className='py-8 text-2xl font-semibold text-center'>Select Your Favourite Category & Start Learning</h2>
				</div>
				<div className="w-full px-10 carousel">

					<div id="slide1" className="relative w-full carousel-item">
						<img src="https://placeimg.com/800/200/arch" className="w-full rounded-lg" alt='item' />
						<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a href="#slide4" className="btn btn-circle">❮</a>
							<a href="#slide2" className="btn btn-circle">❯</a>
						</div>
					</div>
					<div id="slide2" className="relative w-full carousel-item">
						<img src="https://placeimg.com/800/200/arch" className="w-full" alt='item' />
						<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a href="#slide1" className="btn btn-circle">❮</a>
							<a href="#slide3" className="btn btn-circle">❯</a>
						</div>
					</div>
					<div id="slide3" className="relative w-full carousel-item">
						<img src="https://placeimg.com/800/200/arch" className="w-full" alt='item' />
						<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a href="#slide2" className="btn btn-circle">❮</a>
							<a href="#slide4" className="btn btn-circle">❯</a>
						</div>
					</div>
					<div id="slide4" className="relative w-full carousel-item">
						<img src="https://placeimg.com/800/200/arch" className="w-full" alt='item' />
						<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
							<a href="#slide3" className="btn btn-circle">❮</a>
							<a href="#slide1" className="btn btn-circle">❯</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CatagoryCarsoul;