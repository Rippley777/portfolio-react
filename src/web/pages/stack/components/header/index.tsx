import { twMerge } from 'tailwind-merge';

type StackHeaderItemProps = {
  active?: boolean;
  children: React.ReactNode;
  onClick: () => void;
};

const StackHeaderItem = ({
  active,
  children,
  onClick,
}: StackHeaderItemProps) => {
  return (
    <div
      className={twMerge(
        'text-white opacity-70 text-center py-1 px-2 hover:animate-pulse cursor-pointer',
        active ? 'text-compliment animate-pulseSteady' : '',
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
type StackHeaderProps = {
  page: string;
  setPage: (page: string) => void;
};
const headerItems = ['TypeScript', 'React', 'Redux', 'Mongo', 'Node'];
const StackHeader = ({ page, setPage }: StackHeaderProps) => {
  return (
    <header className="flex justify-between absolute left-0 right-0 m-5">
      {headerItems.map((item) => (
        <div className={page === item ? 'active' : ''}>
          <StackHeaderItem
            key={item}
            onClick={() => setPage(item)}
            active={page === item}
          >
            {item}
          </StackHeaderItem>
        </div>
      ))}
    </header>
  );
};

export default StackHeader;
