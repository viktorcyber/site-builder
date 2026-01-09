import { Outlet } from 'react-router';

import Header from '@/components/shared/header';

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
