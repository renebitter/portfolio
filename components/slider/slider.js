import classes from './slider.module.scss';

import { useState } from 'react';
import Image from 'next/image';
// import { SliderData } from './SliderData';
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <i className='fa fa-arrow-left left-arrow' onClick={prevSlide} />
      <i className='fa fa-arrow-right right-arrow' onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={slide.screenshot}>
            {index === current && (
              <>
                <Image
                  src={`/portfolio/images/projects/mernshop/${slide.screenshot}`}
                  width={1000}
                  height={720}
                  alt={slide.screenshot}
                />
                <p>{slide.description}</p>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
