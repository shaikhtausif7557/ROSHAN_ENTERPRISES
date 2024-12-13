import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ isActive, setIsActive }) {
    const [showModal, setShowModal] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showMenu, setShowMenu] = useState(false);

    const validUsername = 'admin';
    const validPassword = 'admin123';

    const handleModal = () => {
        setShowModal(!showModal);
    };

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === validUsername && password === validPassword) {
            setIsActive(true);
            alert('Login successful!');
            handleModal();
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    const handleLogout = () => {
        setIsActive(false);
        alert('Logout successful!');
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <h1>
                        <span>Roshan</span> Enterprises
                    </h1>
                    <div className="menu-toggle" onClick={handleMenuToggle}>
                        &#9776;
                    </div>
                    <div id="nav-items" className={`nav-items ${showMenu ? 'active' : ''}`}>
                        <a href="#Home">Home</a>
                        <a href="#Aboutus">About Us</a>
                        <a href="#Services">Our Services</a>
                        <a href="#Works">Our Works</a>
                        <a href="#Contact">Contact Us</a>
                        {isActive ? (
                            <div id="login" role="button" onClick={handleLogout} aria-label="Logout">
                                Logout
                            </div>
                        ) : (
                            <div id="login" role="button" onClick={handleModal} aria-label="Login">
                                Login
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {showModal && !isActive && (
                <div className="modal-overlay" onClick={handleModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <label>Email:</label>
                            <input
                                type="text"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label>Password:</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type="submit">Submit</button>
                        <button className="close-btn" onClick={handleModal}>
                            Close
                        </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
