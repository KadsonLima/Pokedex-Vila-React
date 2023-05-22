import { useState, useEffect } from 'react';
import axios from 'axios';


axios.defaults.baseURL = import.meta.env.VITE_SERVER_API;


export const useAxios = (axiosParams) => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = async (params) => {
    try {
      const result = await axios.request({
        ...params,
      });
      setResponse(result);
    } catch( err ) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { response, error, loading };
};
