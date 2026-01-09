import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import '@/styles/globals.css';
import App from '@/App';
import QueryProvider from '@/providers/query-provider';

const root = createRoot((document.getElementById('root') as HTMLElement)!);

const Root = ({ children }: { children: React.ReactNode }) =>
  import.meta.env.DEV ? <StrictMode>{children}</StrictMode> : <>{children}</>;

const Main = () => {
  return (
    <QueryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryProvider>
  );
};

async function start() {
  if (import.meta.env.DEV) {
    const { worker } = await import('@/mocks/browser');
    await worker.start();
  }

  root.render(
    <Root>
      <Main />
    </Root>,
  );
}

start();
