import { Route, Routes } from 'react-router';

import { publicRoutes } from '@/routes';
import RootLayout from '@/components/layouts/layout';
import { Toaster } from '@/components/ui/sonner';

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route element={<RootLayout />}>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default App;
