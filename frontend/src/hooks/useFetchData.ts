import { AxiosResponse } from "axios";
import { useState } from "react";

type EndPoint = <T>(data: FuntionProps<T>) => Promise<AxiosResponse<any, any>>;

interface FuntionProps<T> {
  url?: string;
  body?: T;
}

const useFetchData = (endPoint: EndPoint) => {
  const [loading, setLoading] = useState(false);
  const fetchData = async <T>(data: FuntionProps<T>) => {
    console.log("se llamo al hook");

    setLoading(true);
    try {
      const result = await endPoint(data);
      return { ok: true, data: result.data };
    } catch (error) {
      return { ok: false, error: error };
    } finally {
      setLoading(false);
    }
  };

  return { loading, fetchData };
};

export default useFetchData;
