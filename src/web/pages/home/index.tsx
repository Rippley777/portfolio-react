import Page from '../../components/layout/page';
import DeskModel from './components/desk/Desk';

const Home = () => {
  return (
    <Page hideFooter={true} hideHeader={true} noPadding>
      <DeskModel />
    </Page>
  );
};

export default Home;
