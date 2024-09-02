"use client";

import { userStore } from "@/context/zustand";
import useFetchData from "@/hooks/useFetchData";
import { getUserById } from "@/services/userServices";

export default function Page() {
  const { user, setUser } = userStore((user) => user);
  const { response, fetchData } = useFetchData(getUserById);

  const getUser = async () => {
    await fetchData({ url: "1" });
  };

  const modifyUser = async () => {
    response ? setUser(response) : alert("tienes que llamar a la api primero");
  };

  return (
    <div>
      <h1>Informacion de la api</h1>
      <pre>{JSON.stringify(response, null, 2) || "sin informacion"}</pre>

      <h1>Mi estado local:</h1>
      <pre>{JSON.stringify(user, null, 2) || "sin informacion"}</pre>

      <div className=" space-x-5">
        <button onClick={getUser}>Hacer llamada a la api</button>
        <button onClick={modifyUser}>
          Actualizar infomacion en estado local
        </button>
      </div>
    </div>
  );
}
