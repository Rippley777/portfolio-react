import { useEffect, useState } from 'react';
// import { default as deviceDisplay } from '../../../../../assets/images/effects/laptop-display.png';
import { default as copartApp } from '../../../../../assets/images/copart/app-copart.png';
import { default as crashedToysApp } from '../../../../../assets/images/copart/app-crashedtoys.png';

type CarouselItem = {
  id: string;
  image: string;
  title: string;
  description: string;
  imageAlt: string;
  caption: string;
};

type FeaturedCarouselProps = {
  carousel: Partial<CarouselItem>[];
  inView: boolean;
  title: string;
};

const FeaturedCarousel = ({
  carousel,
  inView,
  title,
}: FeaturedCarouselProps) => {
  const [carouselImage, setCarouselImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselImage((prev) => (prev + 1) % carousel.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [carousel.length]);

  const getImageSrc = () => {
    switch (carouselImage) {
      case 0:
        return copartApp;
      case 1:
        return crashedToysApp;
      case 2:
        return copartApp;
      case 3:
        return crashedToysApp;
      default:
        return '';
    }
  };
  const imageSrc = getImageSrc();
  return (
    <div>
      <div className="animate-fadeIn flex justify-center">
        {carousel.length > 0 && imageSrc && (
          <img
            src={imageSrc}
            alt={''}
            // width={395}
            height="auto"
            className="max-w-[800px]"
            // className={inView ? 'animate-scrollUp' : ''}
          />
        )}
      </div>
      {/* <div className="flex justify-center text-compliment">
        {carousel[carouselImage].caption ?? ''}
      </div> */}
    </div>
  );
};

export default FeaturedCarousel;
