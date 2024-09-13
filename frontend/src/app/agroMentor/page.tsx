"use client";

import useFetchData from "@/hooks/useFetchData";
import Header from "../common/Header";
import useFormState from "@/hooks/useFormState";
import { getAgroMentorRecomendation } from "@/services";
import { useState } from "react";
import { toast } from "sonner";
import { icons } from "@/utils/icons";
import { userStore } from "@/context/zustand";
import TypeEffect from "@/components/TypeEffect";
import { Campo } from "@/types";

const IaRecomendation = () => {
  const { fetchData } = useFetchData();
  const { formState, setFormState, resetForm } = useFormState({ question: "" });
  const [fieldSelect, setFieldSelect] = useState<null | Campo>(null);
  const [conversation, setConversation] = useState<
    { type: "question" | "response"; text: string }[]
  >([]);
  const fields: Campo[] = userStore((user) => user.fields);

  const handleSubmit = async () => {
    const client = { type: "question", text: formState.question };
    resetForm();
    setConversation((prev: any) => [...prev, client]);
    const body: { question: String; field?: Campo } = {
      ...formState,
    };
    if (fieldSelect) body["field"] = fieldSelect;

    console.log(body);
    const { ok, data } = await fetchData(getAgroMentorRecomendation, {
      body: body,
    });

    console.log(data);

    ok
      ? setConversation((prev: any) => [
          ...prev,
          { type: "response", text: data.response },
        ])
      : toast.error("No se pudo traer la recomendacion De AgroMentor");
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let { value } = e.target;
    if (value !== "") setFieldSelect(fields[Number(value)]);
  };

  console.log(fieldSelect);
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-6rem)] w-full flex">
        <div className="flex m-2 text-center w-full ">
          <div className="w-3/12 bg-white rounded-l-xl py-5 px-3 border-r-2 border-primary-green">
            <p className="text-[1.4rem] text-primary-green font-bold mb-5">
              Últimas preguntas
            </p>
            <ul className="space-y-2">
              {conversation.map((e, index) => {
                if (e.type === "question")
                  return (
                    <li
                      key={index + 1}
                      className="border text-black text-[1rem] font-semibold p-1 border-primary-green rounded-md"
                    >
                      {e.text}
                    </li>
                  );
              })}
            </ul>
          </div>
          <div className="w-9/12 border bg-white text-black pb-0 pt-4 rounded-r-xl flex max-h-[calc(100vh-7rem)] justify-center ">
            <div className="max-w-[40.625rem] flex flex-col justify-between px-2">
              <div>
                <h1 className="text-[1.8rem] text-primary-green font-bold mb-4">
                  AgroMentor
                </h1>
                <p className="font-medium text-[1rem]">
                  Tu asistente inteligente para el campo. Haz preguntas sobre
                  riego, plagas, fertilización y más. Recibe recomendaciones
                  personalizadas para optimizar tus cultivos en tiempo real.
                </p>
              </div>
              <select
                name="My fields"
                id="1"
                className="p-1.5 border rounded max-w-[12.5rem]"
                onChange={handleSelectChange}
              >
                <option value="">Seleccionar un campo</option>
                {fields.map((field, index) => {
                  return (
                    <option key={field.id} value={index}>
                      {field.name}
                    </option>
                  );
                })}
              </select>
              <ul className="h-full overflow-auto border rounded-lg my-3 px-2">
                {conversation.map((e, index) => {
                  return e.type === "question" ? (
                    <li
                      key={index + 1}
                      className="text-right flex justify-end "
                    >
                      <div className="border p-1 px-5 rounded-lg bg-seconday-green my-2">
                        {e.text}
                      </div>
                    </li>
                  ) : (
                    <li
                      key={index + 1}
                      className="text-left border max-w-[80%] my-2 p-2 px-5 rounded-lg bg-yellow-100"
                    >
                      <TypeEffect text={e.text} />
                    </li>
                  );
                })}
              </ul>
              <div className="border border-primary-green rounded-md flex px-3 mb-5 text-black font-semibold">
                <button>{icons.clip}</button>
                <input
                  type="text"
                  name="question"
                  onChange={setFormState}
                  value={formState.question}
                  className="w-full py-1.5 px-4 text focus:outline-none focus:bg-transparent"
                  placeholder="Escribe tu pregunta aquí"
                  autoComplete="off"
                />
                <button onClick={handleSubmit}>{icons.send}</button>
              </div>
              {/* <div className="space-y-3 mb-10 pt-5">
                <p className="text-xl font-semibold">
                  ¿No sabes qué preguntar? Aquí algunas ideas
                </p>
                <ul>
                  <li>"¿Cuál es el mejor momento para regar?"</li>
                  <li>"¿Cómo prevenir plagas?"</li>
                  <li>"Consejos para optimizar el uso de fertilizantes."</li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IaRecomendation;
