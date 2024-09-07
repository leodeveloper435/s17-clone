"use client";

import { useRouter } from "next/navigation";

const MyFields = () => {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("myFields/createField")}>
        Crear campo
      </button>
    </div>
  );
};

export default MyFields;
