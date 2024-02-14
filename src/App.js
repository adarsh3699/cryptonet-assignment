import React, { useEffect, useState } from 'react';
import './style/App.css';

function App() {
	const [data, setData] = useState({});
	useEffect(() => {
		try {
			async function logMovies() {
				const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
				const fetchData = await response.json();
				setData(fetchData?.results?.[0]);
			}
			logMovies();
		} catch (error) {
			console.error('Error:', error);
		}
	}, []);
	return (
		<div className="App">
			<div className="container">
				<div className="card">
					<div className="card-inner">
						<div className="front" style={{ background: 'url(' + data?.picture?.large + ')' }}></div>
						<div className="back" style={{ background: 'url(' + data?.picture?.large + ')' }}></div>
					</div>
				</div>
				<div className="card-info">
					<h1>
						{data?.name?.first} {data?.name?.last}
					</h1>
					<p>{data?.gender}</p>
					<p>{data?.email}</p>
					<p>{data?.phone}</p>
					<p>
						{data?.location?.city}, {data?.location?.state}
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
