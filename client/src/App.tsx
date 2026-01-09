import { Route, Routes } from 'react-router';

import { publicRoutes } from '@/routes';
import RootLayout from '@/components/layouts/layout';

const App = () => {
  return (
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
  );
};

export default App;
