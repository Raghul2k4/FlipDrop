import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HorizontalAutoScroll = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    // Define the auto-scroll behavior
    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;

        // Reset scroll if it reaches the end
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, 20); // Adjust the speed by changing the interval

    // Cleanup interval on component unmount
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="container-fluid d-flex overflow-auto p-3"
      style={{ whiteSpace: 'nowrap', border: '1px solid #ddd' }}
    >
      {Array.from({ length:500 }).map((_, index) => (
        <div className="card mx-2" style={{ minWidth: '200px' }} key={index}>
          <div className="card-body">
            <h5 className="card-title">Item {index + 1}</h5>
            <p className="card-text">This is item {index + 1}.</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalAutoScroll;
