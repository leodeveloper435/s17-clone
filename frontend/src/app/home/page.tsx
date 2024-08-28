"use client";

import { userStore } from "@/context/zustand";

export default function () {
  const { user, setUser } = userStore((user) => user);

  const modifyUser = () => {
    setUser({ name: "jose", lastName: "Garcia", token: "token12345" });
  };

  return (
    <div>
      <button onClick={modifyUser}>Modificar user y probar persistencia</button>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
