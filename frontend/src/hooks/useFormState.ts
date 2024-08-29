import { useState } from "react";

const useFormState = <T>(initialState: T) => {
  const [formState, setFormState] = useState(initialState);

  const setState = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return { formState, setState };
};

export default useFormState;
