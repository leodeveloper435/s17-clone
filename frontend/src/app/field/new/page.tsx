"use client";

import React, { useState } from "react";
import useFormState from "@/hooks/useFormState";
import { SubmitButton } from "@/components/form/SubmitButton";
import { Input } from "@/components/form/Input";
import { Poppins } from "next/font/google";
import { Select } from "@/components/form/Select";
import { ErrorMessage } from "@/components/form/ErrorMessage";
import { findInputErrors, getFieldFormRules } from "@/utils/validationRules";
import { newFieldInputFields, newFieldSelectFields } from "@/utils/inputFields";
import { convertStringToNumber } from "@/utils/conversions";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "800"],
});

const NewField: React.FC = () => {
  const { formState, setState } = useFormState({
    name: "",
    latitude: "",
    longitude: "",
    size: "",
    workersAmount: "",
    mainCrop: "",
    weatherType: "",
    administration: "",
    season: "",
  });

  const [showInputErrors, setShowInputErrors] = useState(false);

  const validationRules = getFieldFormRules(
    formState.latitude,
    formState.longitude,
    formState.size,
    formState.workersAmount
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (findInputErrors(validationRules).length > 0) {
      setShowInputErrors(true);
      return;
    }
    setShowInputErrors(false);

    const newField = {
      userId: 1,
      name: formState.name,
      latitude: convertStringToNumber(formState.latitude),
      longitude: convertStringToNumber(formState.longitude),
      size: convertStringToNumber(formState.size),
      workersAmount: convertStringToNumber(formState.workersAmount),
      mainCrop: formState.mainCrop,
      weatherType: formState.weatherType,
      administration: formState.administration,
      season: formState.season,
    };

    console.log(newField);
  };

  return (
    <div>
      <h3
        className="text-black
                   text-[21px]
                   md:text-[25px]
                   font-[400]
                   mt-[42px]"
      >
        Agregar Campo
      </h3>

      <form
        className="w-[298px]
                   m-auto
                   mt-[36px]
                   md:mt-[77px]
                   space-y-3
                   md:space-y-4"
        onSubmit={handleSubmit}
      >
        {newFieldInputFields.map((field, index) => (
          <div className="relative" key={index}>
            <Input
              label={field.label}
              name={field.name}
              value={formState[field.name as keyof typeof formState]}
              type={"text"}
              handleChange={setState}
            />
            <ErrorMessage
              validationRules={
                showInputErrors
                  ? validationRules.filter(
                      (validationRule) => validationRule.field === field.name
                    )
                  : []
              }
            />
          </div>
        ))}

        {newFieldSelectFields.map((field, index) => (
          <Select
            key={index}
            name={field.name}
            handleChange={setState}
            value={formState[field.name as keyof typeof formState]}
            options={field.options}
          />
        ))}

        <div className="pt-4">
          <SubmitButton value="Agregar" />
        </div>
      </form>
    </div>
  );
};

export default NewField;
