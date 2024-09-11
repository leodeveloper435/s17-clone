"use client";

import useFetchData from "@/hooks/useFetchData";
import { getMarketGrainPrices } from "@/services";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Market = () => {
  const { fetchData } = useFetchData();
  const [merketData, setMarketData] = useState({});

  useEffect(() => {
    const getMarketData = async () => {
      const { ok, data } = await fetchData(getMarketGrainPrices, {});
      ok
        ? setMarketData(data)
        : toast.error("no se pudo traer la infromacion del mercado");
    };

    getMarketData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-95px)]">
      <h1>Esta es la parte del mercado</h1>
      <pre>{JSON.stringify(merketData, null, 2)}</pre>
    </div>
  );
};

export default Market;
