import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<nav className="navbar">
			<Link to="/" className="nav-logo">
			<img src="/images/progress4.jpeg" alt=""/>
			</Link>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						PRODUCTS
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/about" className="nav-link" onClick={closeMenu}>
						ABOUT
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/pricing" className="nav-link" onClick={closeMenu}>
						PRICING
					</Link>
				</li>
				
				<li className="nav-item">
					<Link to="/Signin" className="nav-link" onClick={closeMenu}>
					SIGN IN
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/Signup" className="nav-link" onClick={closeMenu}>
					SIGN UP
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
