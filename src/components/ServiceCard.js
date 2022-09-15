import React from 'react';

const ServiceCard = ({ item }) => {
	return (
		<div className="shadow-xl card w-96 bg-base-100">
			<figure className="px-10 pt-10">
				<img src={item.img} alt="Shoes" className="rounded-xl" />
			</figure>
			<div className="items-center text-center card-body">
				<div className="rating">
					<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
					<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" checked />
					<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
					<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
					<input type="radio" name="rating-2" className="bg-orange-400 mask mask-star-2" />
				</div>
				<h2 className="card-title">{item.name} </h2>
				<p>$ {item.price}</p>
				<div className="card-actions">
					<button className="btn btn-primary">ADD TO CARD</button>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;