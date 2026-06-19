import { useForm } from "react-hook-form";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

export default function Step1LoanType() {
  const { setFormData } = useContext(FormContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setFormData((prev) => ({
      ...prev,
      loanDetails: data,
    }));

    alert("Step 1 Saved");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Step 1 - Loan Details
        </h2>

        {/* Loan Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Loan Type
          </label>

          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("loanType", {
              required: "Loan Type is required",
            })}
          >
            <option value="">Select Loan Type</option>
            <option value="personal">Personal Loan</option>
            <option value="home">Home Loan</option>
            <option value="business">Business Loan</option>
          </select>

          <p className="text-red-500 text-sm mt-1">
            {errors.loanType?.message}
          </p>
        </div>

        {/* Loan Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Loan Amount
          </label>

          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("loanAmount", {
              required: "Loan Amount is required",
            })}
          />

          <p className="text-red-500 text-sm mt-1">
            {errors.loanAmount?.message}
          </p>
        </div>

        {/* Loan Tenure */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Loan Tenure (Months)
          </label>

          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("loanTenure", {
              required: "Loan Tenure is required",
            })}
          />

          <p className="text-red-500 text-sm mt-1">
            {errors.loanTenure?.message}
          </p>
        </div>

        {/* Loan Purpose */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Loan Purpose
          </label>

          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("loanPurpose", {
              required: "Loan Purpose is required",
            })}
          />

          <p className="text-red-500 text-sm mt-1">
            {errors.loanPurpose?.message}
          </p>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Validate Step 1
        </button>
      </form>
    </div>
  );
}