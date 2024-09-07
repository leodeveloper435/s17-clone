"use client";

import { useRouter } from "next/navigation";

const myFields = () => {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("myFields/createField")}>
        Crear campo
      </button>
    </div>
  );
};

export default myFields;
