"use client";

import { userStore } from "@/context/zustand";
import useFetchData from "@/hooks/useFetchData";
import { getUserById } from "@/services/userServices";

export default function Page() {
  const { user, setUser } = userStore((user) => user);
  const { fetchData } = useFetchData(getUserById);

  const getUser = async () => {
    await fetchData({ url: "1" });
  };

  // const modifyUser = async () => {
  //   response ? setUser(response) : alert("tienes que llamar a la api primero");
  // };

  return (
    <div className="min-h-[calc(100vh-95px)]">
      <h1>Informacion de la api</h1>

      <h1>Mi estado local:</h1>
      <pre className="text-wrap">
        {JSON.stringify(user, null, 2) || "sin informacion"}
      </pre>

      <div className=" space-x-5"></div>
    </div>
  );
}
