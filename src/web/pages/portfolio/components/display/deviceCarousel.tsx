import { useEffect, useState } from 'react';
import { default as deviceDisplay } from '../../../../../assets/images/effects/laptop-display.png';
import { default as spAnalytics } from '../../../../../assets/images/stackpath/stackpath-analytics.png';
import { default as spWorldwide } from '../../../../../assets/images/stackpath/stackpath-worldwide-network.png';

type CarouselItem = {
  id: string;
  image: string;
  title: string;
  description: string;
  imageAlt: string;
  caption: string;
};

type DeviceCarouselProps = {
  carousel: Partial<CarouselItem>[];
  inView: boolean;
  title: string;
};

const DeviceCarousel = ({ carousel, inView, title }: DeviceCarouselProps) => {
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
        return spAnalytics;
      case 1:
        return spWorldwide;
      case 2:
        return spAnalytics;
      case 3:
        return spWorldwide;
      default:
        return spWorldwide;
    }
  };
  const imageSrc = getImageSrc();
  return (
    <div>
      <div className="animate-fadeIn flex justify-center">
        {carousel.length > 0 && (
          <div className="relative h-96 left-[-240px]">
            <div
              className={`absolute top-[50px] left-[53px] min-w-[500px] bg-cover bg-center bg-no-repeat mt-2 h-[270px] overflow-hidden`}
            >
              {imageSrc && (
                <img
                  src={imageSrc}
                  alt={''}
                  width={395}
                  height="auto"
                  // className={inView ? 'animate-scrollUp' : ''}
                />
              )}
            </div>
            <img
              src={deviceDisplay as string}
              alt={title}
              className="min-w-[500px] w-[500px] absolute"
            />
          </div>
        )}
      </div>
      <div className="flex justify-center text-react">
        {carousel[carouselImage].caption ?? ''}
      </div>
    </div>
  );
};

export default DeviceCarousel;
