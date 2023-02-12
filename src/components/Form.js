/** @format */

import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="mt-8">
      <div className="bg-white py-8 px-16 shadow rounded">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data, errors);
          })}
          action="#"
        >
          <div className="">
            <label
              className="block text-sm mt-2 font-medium text-gray-700"
              htmlFor="name"
            >
              Full Name
            </label>
            <div className="mt-1">
              <input
                className="w-full border border-gray-300 px-3 py-1 rounded-lg shadow-sm outline-none focus:border-yellow-600 focus:ring-1 "
                type="text"
                name="fullName"
                {...register("fullName", { required: "This is require" })}
              />
              <p className="text-red-600">{errors.fullName?.message}</p>
            </div>
            <label
              className="block text-sm mt-2 font-medium text-gray-700"
              htmlFor="email"
            >
              E-mail:
            </label>
            <div className="mt-1">
              <input
                className="w-full border border-gray-300 px-3 py-1 rounded-lg shadow-sm outline-none focus:border-yellow-500 focus:ring-1 "
                type="text"
                name="email"
                {...register("email", {
                  required: "Email is require",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email",
                  },
                })}
              />
              <p className="text-red-600">{errors.email?.message}</p>
            </div>
            <label
              className="block text-sm mt-2 font-medium text-gray-700"
              htmlFor="email"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                className="w-full border border-gray-300 px-3 py-1 rounded-lg shadow-sm outline-none focus:border-yellow-500 focus:ring-1 "
                type="password"
                name="password"
                {...register("password", {
                  required: "This is require",
                  minLength: {
                    value: 4,
                    message: "Password at-list 4 chatecter",
                  },
                })}
              />
              <p className="text-red-600">{errors.password?.message}</p>
            </div>
            <label
              className="block text-sm mt-2 font-medium text-gray-700"
              htmlFor="password"
            >
              Confirm Password
            </label>
            <div className="mt-1">
              <input
                className="w-full border border-gray-300 px-3 py-1 rounded-lg shadow-sm outline-none focus:border-yellow-500 focus:ring-1 "
                type="password"
                name="confirmPassword"
                {...register("confirmPassword", {
                  required: true,
                  validate: (val) => {
                    if (watch("password") !== val) {
                      return "Your passwords do no match";
                    }
                  },
                })}
              />
              <p className="text-red-600">{errors.confirmPassword?.message}</p>
            </div>
          </div>
          <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm mt-4 text-sm font-medium text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
