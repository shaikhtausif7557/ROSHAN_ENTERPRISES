import React, { useState, useEffect } from 'react';
import './Work.css';

function Work({ isActive }) {
    const [showModal, setShowModal] = useState(false);
    const [projects, setProjects] = useState([]);
    const [newWork, setNewWork] = useState({ name: '', location: '', year: '' });

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/projects');
                const data = await response.json();
                console.log('Fetched data:', data); // Log the actual fetched data
                setProjects(data); // Set the fetched projects
            } catch (error) {
                console.error('Error fetching projects:', error); // Log any errors
            }
        };
        fetchProjects();
    }, []);
    

    const handleAddWork = () => {
        setShowModal(true); // Show modal on button click
    };

    const handleModalClose = () => {
        setShowModal(false); // Close the modal
        setNewWork({ name: '', location: '', year: '' }); // Reset form
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewWork((prevWork) => ({ ...prevWork, [name]: value })); // Update new work state
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate year input to be a number
        if (isNaN(newWork.year) || newWork.year.length !== 4) {
            alert("Please enter a valid 4-digit year.");
            return;
        }

        const newProject = { ...newWork, year: parseInt(newWork.year) }; // Ensure year is a number

        // Send a POST request to the backend API to add the new project
        const response = await fetch('http://localhost:5000/api/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProject)
        });

        if (response.ok) {
            const addedProject = await response.json();
            setProjects((prevProjects) => [...prevProjects, addedProject]); // Update projects with the newly added project
            handleModalClose(); // Close the modal after submitting
        } else {
            alert("Failed to add project.");
        }
    };
    

    return (
        <div id="our-works">
            <h2>Our Works</h2>
            <p>Explore our successfully completed projects over the years, each delivered with precision and commitment.</p>
            
            {isActive && (
                <button onClick={handleAddWork} className="add-works-btn">Add Works</button>
            )}
            
            {showModal && (
                <div className="modal-overlay" onClick={handleModalClose}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Add New Work</h2>
                        <form onSubmit={handleSubmit}>
                            <label>Name:</label>
                            <input 
                                type="text" 
                                name="name" 
                                required 
                                value={newWork.name} 
                                onChange={handleChange} 
                            />
                            <label>Location:</label>
                            <input 
                                type="text" 
                                name="location" 
                                required 
                                value={newWork.location} 
                                onChange={handleChange} 
                            />
                            <label>Year:</label>
                            <input 
                                type="text" 
                                name="year" 
                                required 
                                value={newWork.year} 
                                onChange={handleChange} 
                            />
                            <button type="submit">Add Work</button>
                        </form>
                        <button className="close-btn" onClick={handleModalClose}>Close</button>
                    </div>
                </div>
            )}

            <div className="projects">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <div className="project-item">
                            <strong>{project.name}</strong> <br />
                            <span>{project.location}, {project.year}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Work;