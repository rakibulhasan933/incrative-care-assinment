import React from 'react';
import photo1 from '../img/aug-14-COVER-768x402.jpg';
import photo2 from '../img/Big-Data-scaled.jpg';
import ServiceCard from './ServiceCard';

const itemLearning = [
	{
		_id: 1,
		name: "BCS Preliminary Bangla Preparation Course",
		price: 1000,
		img: photo1
	},
	{
		_id: 2,
		name: "Full Stack Web Development Batch",
		price: 2000,
		img: photo2
	},
	{
		_id: 3,
		name: "BCS Preliminary Bangla Preparation Course",
		price: 3000,
		img: photo1
	},
	{
		_id: 4,
		name: "Full Stack Web Development Batch",
		price: 4000,
		img: photo2
	},
	{
		_id: 5,
		name: "BCS Preliminary Bangla Preparation Course",
		price: 1500,
		img: photo1
	},
	{
		_id: 6,
		name: "Full Stack Web Development Batch",
		price: 1400,
		img: photo2
	}, {
		_id: 7,
		name: "BCS Preliminary Bangla Preparation Course",
		price: 1200,
		img: photo1
	},
	{
		_id: 8,
		name: "Full Stack Web Development Batch",
		price: 900,
		img: photo2
	},
	{
		_id: 9,
		name: "BCS Preliminary Bangla Preparation Course",
		price: 800,
		img: photo1
	},
	{
		_id: 10,
		name: "Full Stack Web Development Batch",
		price: 1100,
		img: photo2
	},
	{
		_id: 11,
		name: "BCS Preliminary Bangla Preparation Course",
		price: 1000,
		img: photo1
	},
	{
		_id: 12,
		name: "Full Stack Web Development Batch",
		price: 1000,
		img: photo2
	}
];

const Services = () => {
	return (
		<div className="pt-24 mx-12">
			<h2 className='text-6xl font-medium text-center text-blue-300'>Most Trending Online Courses</h2>
			<div className='py-9'>
				<div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-3">
					{
						itemLearning && itemLearning.map((item) => <ServiceCard key={item._id} item={item} />)
					}
				</div>
			</div>
		</div>
	);
};

export default Services;