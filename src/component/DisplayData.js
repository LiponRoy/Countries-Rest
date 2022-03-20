import React from 'react';
const DisplayData = ({ name, flag, popu }) => {
	return (
		<div>
			<div className='ami'>
				<img src={flag} alt='no img lipu' srcset='' width='300px' />
				<h4>name: {name}</h4>
				<h4>poplation: {popu}</h4>
			</div>
		</div>
	);
};

export default DisplayData;
