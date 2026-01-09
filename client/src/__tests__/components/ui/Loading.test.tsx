import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Loading from '@/components/ui/loading';

describe(Loading, () => {
  test('should render loading', () => {
    render(<Loading />);

    const p = screen.getByText('Loading...');
    expect(p).toBeInTheDocument();
  });
});
