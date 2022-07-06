import { useState } from 'react';
import Image from 'next/image';
import classes from './imageSlider.module.scss';

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
    <div className={classes.slider}>
      <i
        className={`${classes['left-arrow']} fa fa-angle-left`}
        onClick={prevSlide}
      />
      <i
        className={`${classes['right-arrow']} fa fa-angle-right`}
        onClick={nextSlide}
      />
      {slides.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? `${classes.slide} ${classes.active}`
                : classes.slide
            }
            key={slide.screenshot}>
            {index === current && (
              <div>
                <Image
                  src={`/portfolio/images/projects/mernshop/${slide.screenshot}`}
                  width={1000}
                  height={720}
                  alt={slide.screenshot}
                />
                <div>
                  {index + 1}. {slide.description}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
