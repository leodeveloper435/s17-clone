import z from "zod";
import { parseValidationResult } from "../../Utils/parseData.js";

const userFullSchema = z.object({
  email: z
    .string()
    .email()
    .max(255, "El email no puede tener más de 255 caracteres"),
  password: z
    .string()
    .min(1, "La contraseña debe tener al menos 1 caracter")
    .max(255, "La contraseña no puede tener más de 255 caracteres"),
  firstName: z
    .string()
    .min(1, "El nombre es obligatorio")
    .max(255, "El nombre no puede tener más de 255 caracteres"),
  lastName: z
    .string()
    .min(1, "El apellido es obligatorio")
    .max(255, "El apellido no puede tener más de 255 caracteres"),
  role: z.enum(["User", "Admin", "Producer"]).default("User"),
  latitude: z.number().min(-90).max(90).nullable(),
  longitude: z.number().min(-180).max(180).nullable(),
});

const userSchemaLogin = z.object({
  email: z
    .string()
    .email()
    .max(255, "El email no puede tener más de 255 caracteres"),
  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .max(255, "La contraseña no puede tener más de 255 caracteres"),
});

export const validateUser = (data) => {
  const result = userFullSchema.safeParse(data);
  const { hasError, errorMessages, userData } = parseValidationResult(result);

  return {
    hasError,
    errorMessages,
    userData,
  };
};


export const validateLogInUser = (data) => {
  const result = userSchemaLogin.safeParse(data);
  const { hasError, errorMessages, userData } = parseValidationResult(result);

  return {
    hasError,
    errorMessages,
    userData,
  };
};

export const validateUpdateUser = (data) => {
  const result = userFullSchema.partial().safeParse(data);
  const { hasError, errorMessages, userData } = parseValidationResult(result);

  return {
    hasError,
    errorMessages,
    userData,
  };
};
