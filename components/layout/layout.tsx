import { ReactNode } from 'react';
import Header from './header/Header';
import Main_header from './mainheader/Main_header';

interface LayoutSiteProps {
  children: ReactNode;
}
const LayoutSite = ({ children }: LayoutSiteProps) => {
  return (
    <div>
      <Main_header/>
      {children}
    </div>
  );
};
export default LayoutSite