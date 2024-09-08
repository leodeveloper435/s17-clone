"use client";

import { userStore } from "@/context/zustand";
import { useRouter } from "next/navigation";

const MyFields = () => {
  const fields = userStore((user) => user.fields);
  const router = useRouter();
  return (
    <div className="min-h-[calc(100vh-95px)] flex flex-col justify-center items-center space-y-10">
      {fields.length ? (
        <pre>{JSON.stringify(fields, null, 2)}</pre>
      ) : (
        <p>No hay campos creados!!</p>
      )}
      <button
        onClick={() => router.push("myFields/createField")}
        className="border text-xl p-2 rounded-lg"
      >
        Crear campo
      </button>
    </div>
  );
};

export default MyFields;
