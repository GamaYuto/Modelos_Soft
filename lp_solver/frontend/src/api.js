import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000',
  timeout: 10000,
});

export async function solveLP(payload) {
  const response = await api.post('/solve', payload);
  return response.data;
}
