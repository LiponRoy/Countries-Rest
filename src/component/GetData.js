import React, { useEffect, useState } from 'react';

const GetData = () => {
	const [countries, setcountries] = useState([]);

	useEffect(() => {
		fetch('https://restcountries.com/v3.1/all')
			.then(response => response.json())
			.then(data => setcountries(data));
	});

	return (
		<div>
			{countries.map((country, key) => (
				<p key={key}>{country.name.common}</p>
			))}
		</div>
	);
};

export default GetData;
