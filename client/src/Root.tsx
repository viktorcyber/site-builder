import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router';

import '@/styles/globals.css';
import App from '@/App';
import QueryProvider from '@/providers/query-provider';

export const Root = ({ children }: { children: React.ReactNode }) =>
  import.meta.env.DEV ? <StrictMode>{children}</StrictMode> : <>{children}</>;

export const Main = () => {
  return (
    <QueryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryProvider>
  );
};
