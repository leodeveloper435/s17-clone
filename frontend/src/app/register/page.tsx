"use client";
// pages/login.tsx

import React from "react";
import Head from "next/head";
import Link from "next/link";
import useFormState from "@/hooks/useFormState";
import useFetchData from "@/hooks/useFetchData";
import { registerUser } from "@/services/user.services";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Register: React.FC = () => {
  const { fetchData } = useFetchData();
  const { formState, setFormState } = useFormState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetchData(registerUser, { body: formState });
    console.log(response);

    response.ok
      ? (toast.success("Se creo el usuario correctamente"),
        router.push("login"))
      : toast.error("No se pudo crear el usuario");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Register</title>
        <meta name="description" content="Register page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-md w-full space-y-8">
        <div className="flex justify-center">
          <div className="w-1/2 h-0 p-20 bg-slate-300 rounded shadow-md "></div>
        </div>

        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Registrarse
          </h2>
        </div>
        <form className="mt-8 space-y-8" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm space-y-8">
            <div>
              <label htmlFor="firstName" className="sr-only">
                Nombre
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Nombre "
                value={formState.firstName}
                onChange={setFormState}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="sr-only">
                Apellido
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="lastName"
                value={formState.lastName}
                onChange={setFormState}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
                value={formState.email}
                onChange={setFormState}
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Contraseña"
                value={formState.password}
                onChange={setFormState}
              />
            </div>
          </div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Registrarse
          </button>
          <div className="flex items-center justify-between flex-col gap-4 ">
            <div className="flex items-center gap-4">
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Recordar contraseña
              </label>
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
            </div>

            <div className="text-sm">
              <Link
                href="login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                ¿Ya tienes una cuenta? Inicia Sesión
              </Link>
            </div>
          </div>

          <div></div>
        </form>
      </div>
    </div>
  );
};

export default Register;
