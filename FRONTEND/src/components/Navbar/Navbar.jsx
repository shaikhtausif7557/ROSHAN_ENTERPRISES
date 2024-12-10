import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ isActive, setIsActive }) {
    const [showModal, setShowModal] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [isActive, setIsActive] = useState(false); // Active state

    // Predefined credentials
    const validUsername = 'admin';
    const validPassword = 'admin123';

    const handleModal = () => {
        setShowModal(!showModal);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
        // Check if the username and password match
        if (username === validUsername && password === validPassword) {
            setIsActive(true);
            alert('Login successful!');
            handleModal(); // Close the modal after successful login
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    const handleLogout = () => {
        setIsActive(false); // Set active to false
        alert('Logout successful!');
    };

    return (
        <div>
            <nav>
                <h1><span>Roshan</span> Enterprises</h1>
                <div id="nav-items">
                    <a href='#Home'>Home</a>
                    <a href='#Aboutus'>About Us</a>
                    <a href='#Services'>Our Services</a>
                    <a href='#Contact'>Contact Us</a>
                    {isActive ? (
                        <>
                            <div id='login' onClick={handleLogout}>Logout</div>
                        </>
                    ) : (
                        <div id='login' onClick={handleModal}>Login</div>
                    )}
                </div>
            </nav>
            
            {showModal && !isActive && ( // Show modal only if not logged in
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
                        </form>
                        <button className="close-btn" onClick={handleModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
