import React, { useEffect, useState } from 'react';
import { getAllCocktail } from '../utils/api';
import { Link } from 'react-router-dom';
import '../App.css';
import Search from './Search';

const Home = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getAllCocktail()
			.then(cocktails => setData([...data, ...cocktails.drinks]))
			.catch(error => {
				console.log(error);
			});
	}, []);
	console.log(data);

	const searchData = item => {
		const result = data.filter((value) => {
			return data.strDrink === item
		})
		console.log(result);
	};
	
	return (
		<div className="container">
			<Search getinput={searchData}/>
			<div className="row">
				{data &&
					data.map(item =>
						
						<>
							<div className="col-md-3 mt-3 m-1" key={item.idDrink}>
								<div className="card" style={{ width: '18rem' }}>
								    <Link to={`/cocktail/${item.idDrink}`}> <img
										src={item.strDrinkThumb}
										className="card-img-top"
										alt={item.strDrink}
									/> </Link>
									<div className="card-body">
										<h5 className="card-title">
											{item.strDrink}
										</h5>
									</div>
								</div>
							</div>
							
							</>
					)}
			</div>
		</div>
	);
};

export default Home;
