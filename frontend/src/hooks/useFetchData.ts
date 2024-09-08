import { useLoaderStore } from "@/context/loader.store";
import { AxiosResponse } from "axios";

type EndPoint = <T>(data: FuntionProps<T>) => Promise<AxiosResponse<any, any>>;

interface queryProps {
  [key: string]: string;
}

interface FuntionProps<T> {
  url?: string;
  querys?: queryProps;
  body?: T;
}

const useFetchData = () => {
  const { showLoader, hideLoader } = useLoaderStore((state) => state);

  const fetchData = async <T>(endPoint: EndPoint, data: FuntionProps<T>) => {
    console.log("se llamo al hook");

    showLoader();
    try {
      const result = await endPoint(data);
      return { ok: true, data: result.data };
    } catch (error) {
      return { ok: false, error: error };
    } finally {
      hideLoader();
    }
  };

  return { fetchData };
};

export default useFetchData;
