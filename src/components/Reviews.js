import React from 'react';

const Reviews = () => {
	return (
		<div className=' bg-slate-100'>
			<h2 className='py-6 text-4xl font-semibold text-center text-orange-500' >Student Feedback</h2>
			<div className="w-full carousel">
				<div id="slide1" className="relative w-full carousel-item">
					<div className="min-h-screen hero bg-base-200">
						<div className="flex-col hero-content lg:flex-row">
							<img src="https://i.ibb.co/JpF1nSV/31671553-2062830170707480-6027634644545961984-n.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='man' />
							<div>
								<p className="px-16">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
								<div className="flex items-center justify-center py-4 rating">
									<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
									<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
									<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
									<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
									<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" checked />
								</div>
								<h4 className='text-center '>Rakibul Hasan Rakib</h4>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide12" className="btn btn-circle">❮</a>
						<a href="#slide10" className="btn btn-circle">❯</a>
					</div>
				</div>
				<div id="slide2" className="relative w-full carousel-item">
					<div className="flex-col hero-content lg:flex-row">
						<img src="https://i.ibb.co/JpF1nSV/31671553-2062830170707480-6027634644545961984-n.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='man' />
						<div>
							<p className="px-16">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
							<div className="flex items-center justify-center py-4 rating">
								<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
								<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
								<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
								<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
								<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" checked />
							</div>
							<h4 className='text-center '>Rakibul Hasan Rakib</h4>
						</div>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide9" className="btn btn-circle">❮</a>
						<a href="#slide11" className="btn btn-circle">❯</a>
					</div>
				</div>
				<div id="slide3" className="relative w-full carousel-item">
					<div className="flex-col hero-content lg:flex-row">
						<img src="https://i.ibb.co/JpF1nSV/31671553-2062830170707480-6027634644545961984-n.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='man' />
						<div>
							<p className="px-16">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
							<div className="flex items-center justify-center py-4 rating">
								<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
								<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
								<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
								<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
								<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" checked />
							</div>
							<h4 className='text-center '>Rakibul Hasan Rakib</h4>
						</div>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide10" className="btn btn-circle">❮</a>
						<a href="#slide12" className="btn btn-circle">❯</a>
					</div>
				</div>
				<div id="slide4" className="relative w-full carousel-item">
					<div className="flex-col hero-content lg:flex-row">
						<img src="https://i.ibb.co/JpF1nSV/31671553-2062830170707480-6027634644545961984-n.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='man' />
						<div>
							<p className="px-16">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
							<div className="flex items-center justify-center py-4 rating">
								<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
								<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
								<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
								<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
								<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" checked />
							</div>
							<h4 className='text-center '>Rakibul Hasan Rakib</h4>
						</div>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide11" className="btn btn-circle">❮</a>
						<a href="#slide9" className="btn btn-circle">❯</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reviews;