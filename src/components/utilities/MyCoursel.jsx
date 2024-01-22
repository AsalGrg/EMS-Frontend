import React, { useEffect, useRef, useState } from 'react';
import './MyCoursel.css';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';

const MyCoursel = ({ children, backgroundColor= null }) => {
  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft = scrollLeft;
    }
  }, [scrollLeft]);

  const btnpressprev = () => {
    const container = containerRef.current;
    if (container) {
      const width = container.clientWidth;
      setScrollLeft((prevScrollLeft) => prevScrollLeft - width);
    }
  };

  const btnpressnext = () => {
    const container = containerRef.current;
    if (container) {
      const width = container.clientWidth;
      setScrollLeft((prevScrollLeft) => prevScrollLeft + width);
    }
  };

  return (
    <div className="product-carousel">
      <div className="controlBtns">
        <button className="pre-btn" onClick={btnpressprev}>
          <p><GrFormPreviousLink/></p>
        </button>
        <button className="next-btn" onClick={btnpressnext}>
          <p><GrFormNextLink/></p>
        </button>
      </div>
      <div className="product-container" id='product-container' ref={containerRef}
      style={backgroundColor &&  {backgroundColor: backgroundColor}}
      >
        {children}
      </div>
    </div>
  );
};

export default MyCoursel;