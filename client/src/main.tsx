import { createRoot } from 'react-dom/client';

import { Main, Root } from '@/Root';

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
