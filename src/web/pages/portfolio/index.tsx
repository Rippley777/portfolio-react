import { useEffect, useRef, useState } from 'react';
import { RootState } from '@/shared/store/store';
import { useSelector } from 'react-redux';
import PortfolioItem, { getImage } from './components/PortfolioItem';
import LoaderModel from '../../../web/components/blocks/3dLoader/React';

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
      <div className="flex flex-col items-center w-full mb-24">
        <LoaderModel />
        <div className="text-3xl text-center">
          Say what you want, but React remains king! Here's to some cool things
          I've built over the past decade!
        </div>
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
