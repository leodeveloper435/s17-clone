"use client";
import React from "react";
import Link from "next/link";
import { userStore } from "@/context/zustand";

const Header: React.FC = () => {
  const user = userStore((data) => data.user);
  return (
    <header className="bg-primary-green p-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <img
        src="/AgroSmart.png"
        alt="Logo AgroSmart"
        className="w-[250px] -mb-2"
      />

      {/* Navigation Links */}
      <nav className="flex space-x-6">
        <Link
          href="/services"
          className="w-[135px] h-[47px] bg-[#F4E2C7] text-gray-800 text-lg text-center flex items-center justify-center rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Servicios
        </Link>
        <Link
          href="/market"
          className="w-[135px] h-[47px] bg-[#F4E2C7] text-gray-800 text-lg text-center flex items-center justify-center rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Mercado
        </Link>
        <Link
          href="/home"
          className="w-[135px] h-[47px] bg-[#F4E2C7] text-gray-800 text-lg text-center flex items-center justify-center rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Clima
        </Link>
        <Link
          href="/about"
          className="w-[135px] h-[47px] bg-[#F4E2C7] text-gray-800 text-lg text-center flex items-center justify-center rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Sobre nosotros
        </Link>
      </nav>

      {/* Login and Register Buttons */}
      {!user ? (
        <div className="flex space-x-6 ">
          <Link
            href="/login"
            className="w-[135px] h-[47px] bg-[#D2A23A] text-gray-800 text-lg text-center flex items-center justify-center rounded-lg shadow-md border border-gray-800 hover:bg-[#b4862a] focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Inicia sesión
          </Link>
          <Link
            href="/register"
            className="w-[135px] h-[47px] bg-[#D2A23A] text-gray-800 text-lg text-center flex items-center justify-center rounded-lg shadow-md border border-gray-800 hover:bg-[#b4862a] focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Regístrate
          </Link>
        </div>
      ) : (
        <div className="flex items-center space-x-6 ">
          <Link
            href="/register"
            className=" h-[47px] px-5 bg-[#D2A23A] text-gray-800 text-lg text-center flex items-center justify-center rounded-full shadow-md border border-gray-800 hover:bg-[#b4862a] focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            notificaciones
          </Link>
          <Link
            href="/register"
            className="w-16 h-16 bg-[#D2A23A] text-gray-800 text-lg text-center flex items-center justify-center rounded-full shadow-md border border-gray-800 hover:bg-[#b4862a] focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            img
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
