import { useLoaderStore } from "@/context/loader.store";
import { AxiosResponse } from "axios";

type EndPoint = <T>(data: FuntionProps<T>) => Promise<AxiosResponse<any, any>>;

interface FuntionProps<T> {
  url?: string;
  body?: T;
}

const useFetchData = () => {
  const showLoader = useLoaderStore((state) => state.showLoader);
  const hideLoader = useLoaderStore((state) => state.hideLoader);

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
