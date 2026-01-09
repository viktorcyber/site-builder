import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import QueryProvider from '@/providers/query-provider';
import { useProjects } from '@/hooks/use-projects';

describe(useProjects, () => {
  test('should fetch with hook projects', async () => {
    const { result } = renderHook(() => useProjects(), {
      wrapper: QueryProvider,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toBeDefined();
  });
});
