import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cocktail from './components/Cocktail';
import Home from './components/Home';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cocktail/:id" element={<Cocktail />} />
			</Routes>
		</div>
	);
}

export default App;
