import { useState } from "react";

// ¿Cómo funciona?

// Simplemente recibe un estado inicial, por ejemplo: {name: "Jose", lastName: "Garcia"},
//  y devuelve el estado junto con una función para actualizar dicho estado.

const useFormState = <T>(initialState: T) => {
  const [form, setForm] = useState(initialState);

  const setFormState = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    let { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return { formState: form, setFormState };
};

export default useFormState;
