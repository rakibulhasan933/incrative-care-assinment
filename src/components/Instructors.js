import React from 'react';

const Instructors = () => {
	return (
		<div className="min-h-screen bg-red-200 hero">
			<div className="flex-col hero-content lg:flex-row">
				<div className="flex items-center justify-center w-1/2">
					<div className="mr-3 avatar online">
						<div className="w-24 rounded-full">
							<img src="https://placeimg.com/192/192/people" alt='man' />
						</div>
					</div>
					<div className="mr-3 avatar online">
						<div className="w-24 rounded-full">
							<img src="https://placeimg.com/192/192/people" alt='woman' />
						</div>
					</div>
					<div className="mr-3 avatar online">
						<div className="w-24 rounded-full">
							<img src="https://placeimg.com/192/192/people" alt='man' />
						</div>
					</div>
					<div className="mr-3 avatar online">
						<div className="w-24 rounded-full">
							<img src="https://placeimg.com/192/192/people" alt='woman' />
						</div>
					</div>
				</div>
				<div className='w-1/2'>
					<h1 className="text-5xl font-bold">Professional Instructors</h1>
					<div className="rating">
						<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
						<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
						<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
						<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
						<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" checked />
					</div>
					<p className="py-6">Join the team of professional instructors today!</p>
					<button className="btn btn-primary">Become Instructor</button>
				</div>
			</div>
		</div>
	);
};

export default Instructors;