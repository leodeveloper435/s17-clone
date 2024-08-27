import { AxiosResponse } from "axios";
import { useState } from "react";

type EndPoint = <T>(data?: T) => Promise<AxiosResponse>;

const useFetchData = <T>(endPoint: EndPoint, data?: T) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(!loading);
    try {
      const result = await endPoint<T>(data);
      setResponse(result.data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(!loading);
    }
  };

  return { response, error, loading, fetchData };
};

export default useFetchData;
