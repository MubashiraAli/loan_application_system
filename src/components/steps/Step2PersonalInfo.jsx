import { useForm } from "react-hook-form";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

export default function Step2PersonalInfo() {
  const { setFormData } = useContext(FormContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setFormData((prev) => ({
      ...prev,
      personalInfo: data,
    }));

    alert("Step 2 Saved");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Step 2 - Personal Information
        </h2>

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("fullName", {
              required: "Full Name is required",
            })}
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.fullName?.message}
          </p>
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("dob", {
              required: "Date of Birth is required",
            })}
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.dob?.message}
          </p>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Gender
          </label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("gender", {
              required: "Gender is required",
            })}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <p className="text-red-500 text-sm mt-1">
            {errors.gender?.message}
          </p>
        </div>

        {/* Marital Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Marital Status
          </label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("maritalStatus", {
              required: "Marital Status is required",
            })}
          >
            <option value="">Select Status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
          <p className="text-red-500 text-sm mt-1">
            {errors.maritalStatus?.message}
          </p>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid Email",
              },
            })}
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.email?.message}
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
            {...register("mobile", {
              required: "Mobile Number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Mobile Number must be 10 digits",
              },
            })}
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.mobile?.message}
          </p>
        </div>

        {/* Alternate Mobile */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Alternate Mobile Number
          </label>
          <input
            type="tel"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("alternateMobile", {
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Must be 10 digits",
              },
            })}
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.alternateMobile?.message}
          </p>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Validate Step 2
        </button>
      </form>
    </div>
  );
}