import React from 'react';
import developmentImg from '../img/pexels-tranmautritam-251225.jpg';

const DevelopmentCard = () => {
	return (
		<div style={{ background: `url(${developmentImg})` }}
			className='flex items-center justify-center py-14'>
			<div className="p-4 shadow-xl card w-1/2 mb-[-100px] bg-cyan-200">
				<div className="card-body">
					<h2 className="card-title">ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট</h2>
					<p>ওয়েব ডেভেলপার হওয়ার স্বপ্ন এবার হবে পূরণ। সম্পূর্ণ ফ্রন্ট ও ব্যাক এন্ড ডেভেলপমেন্ট শেখা হবে শূন্য থেকেই</p>
					<div className="justify-end card-actions">
						<button className="btn btn-primary">বিস্তারিত দেখুন</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DevelopmentCard;