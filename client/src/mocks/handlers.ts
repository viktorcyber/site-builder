import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(`${import.meta.env.VITE_API_BASE_URL}/projects`, () => {
    return HttpResponse.json(
      [
        {
          id: 1,
          name: 'John'
        },
      ],
      { status: 200 },
    );
  }),
];
