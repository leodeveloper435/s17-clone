"use client";
import { userStore } from "@/context/zustand";
import Head from "next/head";
import Image from "next/image";
import { FC, useState, useEffect, useRef } from "react";

// Sample city data
const cities = [
  { id: 1, name: "Córdoba, Argentina" },
  { id: 2, name: "Buenos Aires, Argentina" },
  { id: 3, name: "Rosario, Argentina" },
  { id: 4, name: "Mendoza, Argentina" },
  { id: 5, name: "Salta, Argentina" },
];

const WeatherDashboard: FC = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user, fields } = userStore((user) => user);

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 p-8">
      <Head>
        <title>Panel del clima</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto">
        {/* City selector dropdown */}
        <div className="mb-4 relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 flex items-center justify-between"
          >
            {selectedCity.name}
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
          {isOpen && (
            <div className="absolute mt-2 w-64 bg-white text-gray-700 border border-gray-300 rounded-md shadow-lg z-10">
              <input
                type="text"
                placeholder="Buscar parcela..."
                className="w-full px-4 py-2 border-b border-gray-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="max-h-60 overflow-y-auto">
                {filteredCities.map((city) => (
                  <div
                    key={city.id}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedCity(city);
                      setIsOpen(false);
                      setSearchTerm("");
                    }}
                  >
                    {city.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Weather card for selected city */}
        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-2 row-span-3 bg-green-300 rounded-lg p-4 text-gray-800">
            <div className="flex flex-col items-center mb-2 gap-4">
              <div className="w-24 h-24 bg-yellow-300 rounded-full mr-2"></div>
              <div className="text-4xl font-bold">23.5°C</div>
              <div>{selectedCity.name}</div>
              <div>Lunes, 9:30 AM</div>
              <div>Martes 13, Junio</div>
              <div>Nublado</div>
            </div>
          </div>

          {/* Weekly forecast */}
          <div className="col-span-6 bg-gray-800 rounded-lg p-4 text-white">
            <div className="flex justify-between">
              {[
                "Lunes",
                "Martes",
                "Miércoles",
                "Jueves",
                "Viernes",
                "Sábado",
                "Domingo",
              ].map((day) => (
                <div key={day} className="text-center">
                  <div>{day}</div>
                  <div className="w-8 h-8 bg-yellow-300 rounded-full mx-auto my-2"></div>
                  <div>22° 17°</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sunrise/Sunset */}
          <div className="col-span-2 bg-gray-800 rounded-lg p-4 text-white">
            <div className="flex justify-between">
              <div>
                <Image
                  src="/sunrise.svg"
                  alt="Sunrise"
                  width={50}
                  height={50}
                />
                <div>Amanecer</div>
                <div>06:30</div>
              </div>
              <div>
                <Image src="/sunset.svg" alt="Sunset" width={50} height={50} />
                <div>Atardecer</div>
                <div>18:30</div>
              </div>
            </div>
          </div>

          {/* UV Index */}
          <div className="col-span-2 bg-gray-800 rounded-lg p-4 text-white">
            <div>Índice de UV</div>
            <div className="text-2xl font-bold">5.50 uv</div>
            <div>Alto</div>
          </div>

          {/* Moon phase */}
          <div className="col-span-2 bg-gray-800 rounded-lg flex flex-col items-center p-4 text-white">
            <Image src="/sunset.svg" alt="Sunset" width={50} height={50} />
            <div>Argentina</div>
            <div>08:30</div>
            <div>Luna llena</div>
          </div>

          {/* Weather details */}
          <div className="col-span-3 bg-gray-800 rounded-lg p-4 text-white">
            <div className="grid grid-cols-2 gap-4">
              <div>Temperatura máxima: 19°</div>
              <div>Temperatura mínima: 15°</div>
              <div>Humedad: 68%</div>
              <div>Nubes: 86%</div>
              <div>Viento: 5km/h</div>
            </div>
          </div>
          {/* Weather infographics */}
          <div className="col-span-3 row-span-2 bg-gray-800 rounded-lg ">
            <Image src="/riego.png" alt="Weather" width={500} height={500} />
          </div>

          {/* Hourly forecast */}
          <div className="col-span-3 bg-gray-800 rounded-lg p-4 text-white">
            <div className="flex justify-between">
              {["Now", "10am", "11am", "12pm", "1pm", "2pm"].map((time) => (
                <div key={time} className="text-center">
                  <div>{time}</div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto my-2"></div>
                  <div>18°</div>
                </div>
              ))}
            </div>
          </div>
          {/* Hourly forecast */}
          <div className="col-span-2 bg-gray-800 rounded-lg p-4 text-white">
            <div className="flex justify-between text-xl">
              Se recomiendan riegos moderados
            </div>
          </div>
        </div>
        <div className="text-black">
          <h1>Mi estado local:</h1>
          <pre className="text-wrap">
            {JSON.stringify({ ...user, fields }, null, 2) || "sin informacion"}
          </pre>
        </div>
      </main>
    </div>
  );
};

export default WeatherDashboard;
