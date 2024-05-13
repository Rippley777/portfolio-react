import { useInView } from 'react-intersection-observer';

import { default as image1 } from '../../../../assets/images/fahw/hoc/scroll-blog-detail11.png';
import { default as image2 } from '../../../../assets/images/stackpath/stackpath-analytics.png';
import { default as image3 } from '../../../../assets/images/intuit/ia-homepage-pto-interface.png';
import { default as imageSecondary1 } from '../../../../assets/images/fahw/ps-tech-blue.png';
import DeviceScroll from './display/deviceScroll';
import DeviceCarousel from './display/deviceCarousel';
import FeaturedCarousel from './display/featuredCarousel';

export const getImage = (id: number) => {
  switch (id) {
    case 1:
      return image1;
    case 2:
      return image2;
    case 3:
      return image3;
    case 4:
    default:
      return null;
  }
};
export const getImageSecondarySrc = (id: number) => {
  switch (id) {
    case 1:
      return imageSecondary1;
    case 2:
      return imageSecondary1;
    case 3:
      return imageSecondary1;
    case 4:
      return imageSecondary1;
    case 5:
      return imageSecondary1;
    default:
      return null;
  }
};

const PortfolioItem = (item) => {
  const {
    id,
    title,
    year,
    yearEnd,
    description,
    displayType,
    image,
    link,
    technology,
    carousel,
  } = item;
  const { ref, inView } = useInView({
    // threshold: 0.4, // 50% of the element must be visible
    // triggerOnce: true,
  });
  const imageSrc = getImage(id);
  const imageSecondarySrc = getImageSecondarySrc(id);

  return (
    <section ref={ref} key={id} className="">
      <div className="h-[90vh] w-screen flex flex-col justify-between overflow-hidden p-10">
        <div className="flex justify-between">
          <h1 className="text-5xl animate-slideIn font-fitzgerald">{title}</h1>
          <div className="text-5xl animate-fadeShowTenSeconds">
            <span className="opacity-50">{year} - </span>
            <span>{yearEnd}</span>
          </div>
        </div>

        <div className="">
          {inView && displayType === 'auto-scroll' && (
            <DeviceScroll imageSrc={imageSrc} inView={inView} title={title} />
          )}
          {inView && displayType === 'auto-carousel' && (
            <DeviceCarousel carousel={carousel} inView={inView} title={title} />
          )}
          {inView && displayType === 'video-display' && (
            <video width="750" height="500" autoPlay>
              <source
                src={require('../../../../assets/videos/ito.mp4')}
                type="video/mp4"
              />
            </video>
          )}
          {inView && displayType === 'featured-carousel' && (
            <FeaturedCarousel
              carousel={carousel}
              inView={inView}
              title={title}
            />
          )}
        </div>
        <div className="text-2xl animate-slideUp">{description}</div>

        <h1 className="text-3xl animate-fadeInFifteenSeconds">What I used:</h1>
      </div>

      <div
        style={{
          backgroundAttachment: 'fixed!important',
          backgroundSize: 'contain',
          // // background: `url(${require('../../../assets/images/fahw-blog.png')})`,
          background: `url(${imageSecondarySrc})`,
        }}
        className="h-[10vh] bg-contain bg-repeat-y fixed-bg-attachment contain-bg-size"
      />
    </section>
  );
};

export default PortfolioItem;
