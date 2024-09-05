"use client";

import React, { useState } from "react";
import useFormState from "@/hooks/useFormState";
import useFetchData from "@/hooks/useFetchData";
import { loginUser } from "@/services/userServices";
import { SubmitButton } from "@/components/form/SubmitButton";
import { Input } from "@/components/form/Input";
import { Poppins } from "next/font/google";
import { Select } from "@/components/form/Select";
import {
  administrationOptions,
  mainCropOptions,
  seaasonOptions,
  weatherTypeOptions,
} from "@/utils/selectOptions";
import { ErrorMessage } from "@/components/form/ErrorMessage";
import { findInputErrors, getFieldFormRules } from "@/utils/validationRules";

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
  const { fetchData } = useFetchData(loginUser);

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

    console.log(formState);
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
        <div className="relative">
          <Input
            label={"Nombre del Campo"}
            name={"name"}
            value={formState.name}
            type={"text"}
            handleChange={setState}
          />
        </div>

        <div className="relative">
          <Input
            label={"Latitud"}
            name={"latitude"}
            value={formState.latitude}
            type={"text"}
            handleChange={setState}
          />
          <ErrorMessage
            validationRules={
              showInputErrors
                ? validationRules.filter(
                    (validationRule) => validationRule.field === "latitude"
                  )
                : []
            }
          />
        </div>

        <div className="relative">
          <Input
            label={"Longitud"}
            name={"longitude"}
            value={formState.longitude}
            type={"text"}
            handleChange={setState}
          />
          <ErrorMessage
            validationRules={
              showInputErrors
                ? validationRules.filter(
                    (validationRule) => validationRule.field === "longitude"
                  )
                : []
            }
          />
        </div>

        <div className="relative">
          <Input
            label={"Tamaño (hectáreas)"}
            name={"size"}
            value={formState.size}
            type={"text"}
            handleChange={setState}
          />
          <ErrorMessage
            validationRules={
              showInputErrors
                ? validationRules.filter(
                    (validationRule) => validationRule.field === "size"
                  )
                : []
            }
          />
        </div>

        <div className="relative">
          <Input
            label={"Cantidad de empleados"}
            name={"workersAmount"}
            value={formState.workersAmount}
            type={"text"}
            handleChange={setState}
          />
          <ErrorMessage
            validationRules={
              showInputErrors
                ? validationRules.filter(
                    (validationRule) => validationRule.field === "workersAmount"
                  )
                : []
            }
          />
        </div>

        <Select
          name={"mainCrop"}
          handleChange={setState}
          value={formState.mainCrop}
          options={mainCropOptions}
        />

        <Select
          name={"weatherType"}
          handleChange={setState}
          value={formState.weatherType}
          options={weatherTypeOptions}
        />

        <Select
          name={"administration"}
          handleChange={setState}
          value={formState.administration}
          options={administrationOptions}
        />

        <Select
          name={"season"}
          handleChange={setState}
          value={formState.season}
          options={seaasonOptions}
        />

        <div className="pt-4">
          <SubmitButton value="Agregar" />
        </div>
      </form>
    </div>
  );
};

export default NewField;
