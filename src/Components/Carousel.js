import React, { useContext, useEffect, useState, useRef } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { CarouselContext } from './CarouselList';
import '../Slider.css';

const IMAGE_BASE_URL = "/";

function Slider() {
  const { carousel } = useContext(CarouselContext);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const [activeCarousel, setActiveCarousel] = useState({});
  const elementRef = useRef(null);

  const sliderRight = () => {
    elementRef.current.scrollLeft += window.innerWidth - 110;
  };

  const sliderLeft = () => {
    elementRef.current.scrollLeft -= window.innerWidth - 110;
  };

    useEffect(() => {
      // Update the active movie when the current index changes
      setActiveCarousel(carousel.find((carousel) => carousel.id === currentCarouselIndex + 1));
    }, [currentCarouselIndex, carousel]);

  return (
    <div>
    <div className="slider-container">
      <div className="container2">

          <HiOutlineChevronLeft className="l-arrow" onClick={sliderLeft} />
    
          <HiOutlineChevronRight className="r-arrow " onClick={sliderRight} />
      

      <div className="flex" ref={elementRef}>
        {carousel.map((carousel) => (
          <div key={carousel.id} className="min-w">
            <img src={IMAGE_BASE_URL + carousel.image} className="w-full" onClick={() => window.open(carousel.backdrop_path, '_blank')} />
            <div className="px-4 pt-2">
              <h3 className="text-lg font-bold">{carousel.title}</h3>
              <p className="text-gray-400">{carousel.genre}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
     
      <div className="dots">
      {carousel.map((carousel, i) => (
        <span
        key={i}
        id={`dot-${i + 1}`}
        className={`dot ${currentCarouselIndex === i ? 'active' : ''}`}
        onClick={() => {
          setCurrentCarouselIndex(i);
          setActiveCarousel(carousel.find((c) => c.id === i + 1));
        }}
      >
      </span>
      ))}
    </div>
    </div>
  );
}

export default Slider;