import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { FormContext } from "../../context/FormContext";

export default function Step5Employment() {
  const { setFormData } = useContext(FormContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const employmentType = watch("employmentType");

  const onSubmit = (data) => {
    setFormData((prev) => ({
      ...prev,
      employment: data,
    }));

    alert("Step 5 Saved");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Step 5 - Employment & Income
        </h2>

        {/* Employment Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Employment Type
          </label>

          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("employmentType", {
              required: "Employment Type is required",
            })}
          >
            <option value="">Select Employment Type</option>
            <option value="salaried">Salaried</option>
            <option value="self-employed">Self Employed</option>
            <option value="business-owner">Business Owner</option>
          </select>

          <p className="text-red-500 text-sm mt-1">
            {errors.employmentType?.message}
          </p>
        </div>

        {/* SALARIED */}
        {employmentType === "salaried" && (
          <div className="space-y-4 p-4 bg-gray-50 rounded-xl border">
            <h3 className="font-semibold text-gray-700">
              Salaried Details
            </h3>

            <div>
              <label className="block text-sm mb-1">Company Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                {...register("companyName")}
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Designation</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                {...register("designation")}
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Monthly Salary</label>
              <input
                type="number"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                {...register("salary")}
              />
            </div>
          </div>
        )}

        {/* SELF EMPLOYED */}
        {employmentType === "self-employed" && (
          <div className="space-y-4 p-4 bg-gray-50 rounded-xl border">
            <h3 className="font-semibold text-gray-700">
              Self Employed Details
            </h3>

            <div>
              <label className="block text-sm mb-1">Profession</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                {...register("profession")}
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Annual Income</label>
              <input
                type="number"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                {...register("annualIncome")}
              />
            </div>
          </div>
        )}

        {/* BUSINESS OWNER */}
        {employmentType === "business-owner" && (
          <div className="space-y-4 p-4 bg-gray-50 rounded-xl border">
            <h3 className="font-semibold text-gray-700">
              Business Details
            </h3>

            <div>
              <label className="block text-sm mb-1">Business Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                {...register("businessName")}
              />
            </div>

            <div>
              <label className="block text-sm mb-1">GST Number</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                {...register("gstNumber")}
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Annual Turnover</label>
              <input
                type="number"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                {...register("turnover")}
              />
            </div>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Validate Step 5
        </button>
      </form>
    </div>
  );
}