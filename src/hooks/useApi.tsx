import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_SERVER_API;

interface UseAxiosResponse {
  response?: AxiosResponse;
  error?: AxiosError;
  loading: boolean;
}

export const useAxios = (axiosParams: AxiosRequestConfig): UseAxiosResponse => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(true);

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request({
        ...params,
      });
      setResponse(result);
    } catch (err: unknown) {
      setError(err as AxiosError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { response, error, loading };
};
