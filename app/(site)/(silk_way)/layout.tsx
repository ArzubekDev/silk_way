import { FC, ReactNode } from 'react';

interface LayoutWelcomeProps {
  children: ReactNode;
}
const LayoutWelcome: FC<LayoutWelcomeProps> = ({ children }) => {
  return <div>{children}</div>;
};
export default LayoutWelcome;
