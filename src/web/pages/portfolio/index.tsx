import { useEffect, useRef } from 'react';
import { RootState } from '@/shared/store/store';
import { useSelector } from 'react-redux';

import { default as deviceDisplay } from '../../../assets/images/scroll-devices.png';
import { default as image1 } from '../../../assets/images/fahw/hoc/scroll-blog-details.png';
import { default as image2 } from '../../../assets/images/stackpath/stackpath-analytics.png';
import { default as image3 } from '../../../assets/images/intuit/ia-homepage-pto-interface.png';
import { useInView } from 'react-intersection-observer';

const getImage = (id: number) => {
  switch (id) {
    case 2:
      return image1;
    case 3:
      return image2;
    case 4:
      return image3;
    case 5:
    default:
      return null;
  }
};

const PortfolioItem = (item) => {
  const { id, title, year, description, image, link, technology } = item;
  const { ref, inView } = useInView({
    /* Optional settings */
    threshold: 0.5, // 50% of the element must be visible
    triggerOnce: true,
  });
  const imageSrc = getImage(id);
  console.log({ inView });

  // useEffect(() => {
  //   console.log({ inView });
  // }, [inView]);
  return (
    <div
      ref={ref}
      key={id}
      className="bg-green-400 relative h-screen w-screen flex flex-col justify-between overflow-hidden"
    >
      {inView && (
        <div className="flex-1 animate-fadeInFifteenSeconds">
          {imageSrc && (
            <img
              src={deviceDisplay as string}
              alt={title}
              className="min-w-80 sm:max-w-[75vw]"
            />
          )}
          <div className="m-5 text-2xl animate-slideUp">{description}</div>
        </div>
      )}
      <div className="text-5xl animate-fadeShowTenSeconds">{year}</div>

      <div className="text-right">
        <div className="m-5">
          <h1 className="text-5xl animate-slideIn">{title}</h1>
        </div>
        <code className="text-lime-700">{technology}</code>
        <div
          style={{
            backgroundAttachment: 'fixed!important',
            // background: `url(${require('../../../assets/images/fahw-blog.png')})`,
            background: `url(${imageSrc})`,
          }}
          className="h-20 bg-cover bg-center bg-no-repeat overflow-y-scroll fixed-bg-attachment"
        />
      </div>
    </div>
  );
};

const Portfolio = () => {
  const portfolio = useSelector((state: RootState) => state.portfolio);
  //   console.log(portfolio);
  const portfolioItems = useSelector(
    (state: RootState) => state.portfolio.list,
  );
  console.log(portfolioItems);
  return (
    <div>
      {/* <h1>Portfolio</h1> */}
      <div className="h-1/2 w-full">
        <h1>tesltkjaegjaleg;jalkejg;lkaejg;lkaejg</h1>
      </div>
      <div>
        {portfolioItems.map((item) => (
          <>
            <PortfolioItem {...item} image={getImage(item.id)} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
