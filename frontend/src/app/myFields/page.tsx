"use client";

import { userStore } from "@/context/zustand";
import { useRouter } from "next/navigation";
import Field from "../../components/field/Field";
// import { useState } from "react";

// interface FieldData {
//   id: number;
//   userId : number;
//   name: string;
//   location: string;
//   size: number;
//   employees: number;
//   mainCrop: string;
//   climate: string;
//   administration: string;
//   season: string;
// }
const MyFields = () => {
  // const dbFields = ;
  const fields= userStore((user) => user.fields);
  const router = useRouter();
  console.log(fields)
  return (
    <div className="min-h-[calc(100vh-95px)] flex flex-col justify-center items-center space-y-10 text-black">
      {fields ? (
            <div className="min-h-screen bg-[#fce8d9] p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Mis campos</h1>
            <div className="space-y-4">
              {fields.map((field) => (
                <Field key={field.id} field={field} />
              ))}
            </div>

          </div>
      ) : (
        <p>No hay campos creados!!</p>
      )}
      <button
        onClick={() => router.push("myFields/createField")}
        className="mt-4 bg-[#2f6c3d] text-white px-4 py-2 rounded"
      >
        Crear campo
      </button>
    </div>
  );
};

export default MyFields;
