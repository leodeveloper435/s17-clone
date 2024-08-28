import { AxiosResponse } from "axios";
import { useState } from "react";

type EndPoint = <T>(data: FuntionProps<T>) => Promise<AxiosResponse<any, any>>;

interface FuntionProps<T> {
  url?: string;
  body?: T;
}

const useFetchData = (endPoint: EndPoint) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async <T>(data: FuntionProps<T>) => {
    setLoading(true);
    try {
      const result = await endPoint(data);
      setResponse(result.data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, fetchData };
};

export default useFetchData;
