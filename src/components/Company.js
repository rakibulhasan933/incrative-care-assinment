import React from 'react';
import company1 from '../img/company/pexels-luis-quintero-3689532.jpg';
import company2 from '../img/company/pexels-pixabay-208474.jpg';
import company3 from '../img/company/pexels-scott-webb-430205.jpg';
import company4 from '../img/company/pexels-vietnam-photographer-9973155.jpg';

const Company = () => {
	return (
		<div className='p-28 bg-cyan-50'>
			<h2 className='py-10 text-3xl font-semibold text-center text-red-200 '>Companies Who Trust Us</h2>
			<div className="w-full carousel rounded-xl ">
				<div id="slide5" className="relative w-full carousel-item">
					<img src={company1} className="w-1/4 p-4" alt='man' />
					<img src={company2} className="w-1/4 p-4" alt='man' />
					<img src={company3} className="w-1/4 p-4" alt='man' />
					<img src={company4} className="w-1/4 p-4" alt='man' />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide8" className="btn btn-circle">❮</a>
						<a href="#slide6" className="btn btn-circle">❯</a>
					</div>
				</div>
				<div id="slide6" className="relative w-full carousel-item">
					<img src={company1} className="w-1/4 p-4" alt='man' />
					<img src={company2} className="w-1/4 p-4" alt='man' />
					<img src={company3} className="w-1/4 p-4" alt='man' />
					<img src={company4} className="w-1/4 p-4" alt='man' />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide5" className="btn btn-circle">❮</a>
						<a href="#slide7" className="btn btn-circle">❯</a>
					</div>
				</div>
				<div id="slide7" className="relative w-full carousel-item">
					<img src={company1} className="w-1/4 p-4" alt='man' />
					<img src={company2} className="w-1/4 p-4" alt='man' />
					<img src={company3} className="w-1/4 p-4" alt='man' />
					<img src={company4} className="w-1/4 p-4" alt='man' />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide6" className="btn btn-circle">❮</a>
						<a href="#slide8" className="btn btn-circle">❯</a>
					</div>
				</div>
				<div id="slide8" className="relative w-full carousel-item">
					<img src={company1} className="w-1/4 p-4" alt='man' />
					<img src={company2} className="w-1/4 p-4" alt='man' />
					<img src={company3} className="w-1/4 p-4" alt='man' />
					<img src={company4} className="w-1/4 p-4" alt='man' />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide7" className="btn btn-circle">❮</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Company;