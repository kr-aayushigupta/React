import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout1: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="p-4 bg-gray-100 rounded shadow-sm my-2">
      {children}
    </div>
  );
};

export default Layout1;
