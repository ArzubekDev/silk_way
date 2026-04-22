import LayoutSite from '@/components/layout/layout';
import { FC, ReactNode } from 'react';
import '../../globals.scss';

interface LayoutHomeProps {
  children: ReactNode;
}
const LayoutHome: FC<LayoutHomeProps> = ({ children }) => {
  return (
    <LayoutSite>
     <div className="container">
       <div className="home-layout">
        <div className="home-layoutContainer">
          <main className="main">{children}</main>
        </div>
      </div>
     </div>
    </LayoutSite>
  );
};
export default LayoutHome;
