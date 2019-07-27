import React from 'react';
import FlippableCard from './FlippableCard';

const CardList = ({ distortions }) => {
	return (
			<div>
				{
					distortions.map((user,i) => {
						return (
							<FlippableCard
								key={i} 
								username={distortions[i].username} 
								name={distortions[i].name} 
								email={distortions[i].email}
							/>
						);
					})
				}
			</div>
	);
}

export default CardList;