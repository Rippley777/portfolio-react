import { useSelector } from 'react-redux';

import { RootState } from '../../../shared/store/store';
import Header from '../header';
import Footer from '../footer';

type CompProps = {
  children: React.ReactNode;
  hideFooter?: boolean;
  hideHeader?: boolean;
  noPadding?: boolean;
};

const Page = ({
  children,
  hideFooter = false,
  hideHeader = false,
  noPadding,
}: CompProps) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={`h-full w-full ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="bg-gray-200 dark:bg-gray-900 text-black dark:text-white flex flex-col h-full w-full">
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
