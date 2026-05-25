import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? 'https://vigilant-eureka-vxqxjpw7xrwc5gv-8000.app.github.dev/',
  timeout: 10000,
});

export async function solveLP(payload) {
  const response = await api.post('/solve', payload);
  return response.data;
}
