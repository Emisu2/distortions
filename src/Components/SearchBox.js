import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--purple bg-lightest-purple'
				type='search' 
				placeholder='search distortions' 
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;