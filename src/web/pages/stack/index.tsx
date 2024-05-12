import { useState } from 'react';
import StackHeader from './components/header';

const StackPage: React.FC = () => {
  const [page, setPage] = useState('React');
  return (
    <div>
      <StackHeader page={page} setPage={setPage} />
    </div>
  );
};

export default StackPage;
