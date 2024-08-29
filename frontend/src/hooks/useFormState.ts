import { useState } from "react";

// ¿Cómo funciona?

// Simplemente recibe un estado inicial, por ejemplo: {name: "Jose", lastName: "Garcia"},
//  y devuelve el estado junto con una función para actualizar dicho estado.

const useFormState = <T>(initialState: T) => {
  const [formState, setFormState] = useState(initialState);

  const setState = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return { formState, setState };
};

export default useFormState;
