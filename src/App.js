import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import About from './components/About';
import Pricing from './components/Pricing';
import Signin from './components/Signin';

function App() {
	return (
		<div className="app">
			<Router>
				<Navbar />

				<Switch>
					<Route path="/" exact component={Product} />
					<Route path="/about" exact component={About} />
					<Route path="/pricing" exact component={Pricing} />
					<Route path="/Signin" exact component={Signin} />
				
				</Switch>
			</Router>
		</div>
	);
}

export default App;
