import React, { useState, useEffect, useRef } from 'react';
import No from '../assets/no-dp.png'; // Placeholder image

const CommandBox = () => {
    const [commands, setCommands] = useState([]);
    const [error, setError] = useState(null);
    const scrollContainerRef = useRef(null); // Use ref to access the scrollable div

    const fetchCommand = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            if (data.length === 0) {
                setError("No commands found.");
            } else {
                setCommands(data);
            }
        } catch (err) {
            setError("Error fetching commands: " + err.message);
            console.log(err);
        }
    };

    useEffect(() => {
        fetchCommand();
    }, []);

    // Smooth auto-scroll logic
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollBy({
                    left: 1, // Small scroll step for smoother effect
                    behavior: 'smooth' // Smooth scrolling animation
                });
            }
        }, 10); // Shorter interval for smoother continuous scroll

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container " >
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Please share your honest comments here..."
            />
            {error && <p className="text-danger">{error}</p>}
            <div className="row overflow-auto">
                <div
                    className="d-flex overflow-x-scroll"
                    ref={scrollContainerRef} // Reference to the scrollable container
                    style={{ whiteSpace: 'wrap' }} // Prevent line breaks for continuous scroll
                >
                    {commands.map((command) => (
                        <div
                            className="col-auto card me-2"
                            key={command.id}
                            style={{ width: '250px', height: '300px' }} // Adjust card size
                        >
                            <img
                                src={No}
                                className="card-img-top"
                                alt="Profile Picture"
                                style={{ height: '170px', objectFit: 'cover' }} // Adjust image height
                            />
                            <div className="card-body" style={{ padding: '10px' }}>
                                <h6 className="card-title" style={{ fontSize: '14px' }}>
                                    {command.email}
                                </h6>
                                <p className="card-text" style={{ fontSize: '12px' }}>
                                    {command.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CommandBox;
