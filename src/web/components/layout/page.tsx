import { useSelector } from 'react-redux';

import { RootState } from '../../../shared/store/store';
import Header from '../header';
import Footer from '../footer';
import { twMerge } from 'tailwind-merge';

type CompProps = {
  children: React.ReactNode;
  hideFooter?: boolean;
  hideHeader?: boolean;
  noBackground?: boolean;
  noPadding?: boolean;
};

const Page = ({
  children,
  hideFooter = false,
  hideHeader = false,
  noBackground = false,
  noPadding,
}: CompProps) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={`h-full w-full ${theme === 'dark' ? 'dark' : ''}`}>
      <div
        className={twMerge(
          'flex flex-col h-full w-full',
          !noBackground &&
            'bg-gradient-to-tr from-primaryMonoDarkest to-primaryMonoDark',
        )}
      >
        {!hideHeader && <Header />}
        <main
          className={`${!noPadding && 'p-5'} flex-1 h-full overflow-scroll`}
        >
          {children}
        </main>
        {!hideFooter && <Footer />}
      </div>
    </div>
  );
};

export default Page;
