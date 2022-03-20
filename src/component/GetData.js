import React, { useEffect, useState } from 'react';
import DisplayData from './DisplayData';

const GetData = () => {
	const [countries, setcountries] = useState([]);

	useEffect(() => {
		fetch('https://restcountries.com/v3.1/all')
			.then(response => response.json())
			.then(data => setcountries(data));
	});

	return (
		<div>
			<div className='row'>
				{countries.map((country, key) => (
					<div key={key} className='col-md-3'>
						<DisplayData name={country.name.common} popu={country.population} flag={country.flags.png}></DisplayData>
					</div>
				))}
			</div>
		</div>
	);
};

export default GetData;
