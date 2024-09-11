"use client";

import useFetchData from "@/hooks/useFetchData";
import { getMarketGrainPrices } from "@/services";
import Head from "next/head";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import CropPrices from "../../components/market/CropPrices";
import CurrencyExchange from "../../components/market/CurrencyExchange";
import AgriculturalInputs from "../../components/market/AgriculturalInputs";
import Header from "../common/Header";

interface CropPricesProps {
  marketData: string; // Replace 'any' with the actual type of marketData
}
const Market = () => {
  const { fetchData } = useFetchData();
  const [marketData, setMarketData] = useState({});

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
    <>
      <Header />
      <div className="min-h-screen bg-orange-50 py-8">
        <Head>
          <title>Agricultural Data</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="container mx-auto px-4 text-black">
          <h1 className="text-3xl font-bold mb-8 text-center ">
            Datos actuales de mercado
          </h1>
          <div className="space-y-8 ">
            <CropPrices marketData={marketData} />
            <CurrencyExchange />
            <AgriculturalInputs />
          </div>
        </main>
      </div>
    </>
  );
};

export default Market;
