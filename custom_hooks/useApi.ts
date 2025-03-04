// useApi.js
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useApi = () => {
  const queryClient = useQueryClient();

  const api = (url: string, options: RequestInit = {}) => {
    return useMutation({
      mutationKey: [url],
      mutationFn: async () => {
        const response = await fetch(url, {
          ...options,
          headers: {
            'Authorization': `Bearer ${process.env.TOKEN!}`,
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        return data;
      },
    });
  };

  const get = (url: string) => api(url, { method: 'GET' });
  const post = (url: string, body: object) => api(url, { method: 'POST', body: JSON.stringify(body) });
  const put = (url: string, body: object) => api(url, { method: 'PUT', body: JSON.stringify(body) });
  const del = (url: string) => api(url, { method: 'DELETE' });

  return { get, post, put, del };
};

export default useApi;