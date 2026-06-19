import { useForm } from "react-hook-form";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

export default function Step6CoApplicant() {
  const { setFormData } = useContext(FormContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setFormData((prev) => ({
      ...prev,
      coApplicant: data,
    }));

    alert("Step 6 Saved");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Step 6 - Co-Applicant Details
        </h2>

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>

          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("coApplicantName", {
              required: "Full Name is required",
            })}
          />

          <p className="text-red-500 text-sm mt-1">
            {errors.coApplicantName?.message}
          </p>
        </div>

        {/* Relationship */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Relationship
          </label>

          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("relationship", {
              required: "Relationship is required",
            })}
          >
            <option value="">Select Relationship</option>
            <option value="spouse">Spouse</option>
            <option value="father">Father</option>
            <option value="mother">Mother</option>
            <option value="brother">Brother</option>
            <option value="sister">Sister</option>
            <option value="other">Other</option>
          </select>

          <p className="text-red-500 text-sm mt-1">
            {errors.relationship?.message}
          </p>
        </div>

        {/* PAN */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            PAN Number
          </label>

          <input
            type="text"
            placeholder="ABCDE1234F"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("panNumber", {
              required: "PAN Number is required",
              pattern: {
                value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                message: "Invalid PAN Format",
              },
            })}
          />

          <p className="text-red-500 text-sm mt-1">
            {errors.panNumber?.message}
          </p>
        </div>

        {/* Annual Income */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Annual Income
          </label>

          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("annualIncome", {
              required: "Annual Income is required",
            })}
          />

          <p className="text-red-500 text-sm mt-1">
            {errors.annualIncome?.message}
          </p>
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mobile Number
          </label>

          <input
            type="tel"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("mobileNumber", {
              required: "Mobile Number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Mobile Number must be 10 digits",
              },
            })}
          />

          <p className="text-red-500 text-sm mt-1">
            {errors.mobileNumber?.message}
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Validate Step 6
        </button>
      </form>
    </div>
  );
}