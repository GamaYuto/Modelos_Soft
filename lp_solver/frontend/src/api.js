import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000',
  timeout: 10000,
});

/**
 * Envía el payload del modelo al backend y retorna la respuesta del solver.
 */
export async function solveLP(payload) {
  const response = await api.post('/solve', payload);
  return response.data;
}
