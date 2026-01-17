import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { ClerkProvider } from '@clerk/clerk-react';

import '@/styles/globals.css';
import App from '@/App';
import QueryProvider from '@/providers/query-provider';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file');
}

const Root = ({ children }: { children: React.ReactNode }) =>
  import.meta.env.DEV ? <StrictMode>{children}</StrictMode> : <>{children}</>;

const Main = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <QueryProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryProvider>
    </ClerkProvider>
  );
};

const root = createRoot((document.getElementById('root') as HTMLElement)!);

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
