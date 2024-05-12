import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPorfolioData } from '../../../shared/store/reducers/portfolio';
import { AppDispatch, RootState } from '@/shared/store/store';

import Page from '../../components/layout/page';
import DeskModel from './components/desk/Desk';
import Stack from '../stack';
import Portfolio from '../portfolio';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (page === 1) {
      dispatch(fetchPorfolioData());
    }
  }, [page, dispatch]);

  return (
    <Page hideFooter hideHeader noPadding noBackground>
      {page === 0 && <DeskModel onNext={() => setPage(1)} />}
      {page === 1 && (
        <h1 className="text-white">
          <Portfolio />
        </h1>
      )}
      {page === 2 && (
        <h1 className="text-white">
          <Stack />
        </h1>
      )}
    </Page>
  );
};

export default Home;
