import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { FormContext } from "../../context/FormContext";

export default function Step3KYC() {
  const { setFormData } = useContext(FormContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [panStatus, setPanStatus] = useState("");
  const [aadhaarStatus, setAadhaarStatus] = useState("");

  const verifyPAN = () => {
    setPanStatus("Verifying...");

    setTimeout(() => {
      setPanStatus("PAN Verified ✅");
    }, 1500);
  };

  const verifyAadhaar = () => {
    setAadhaarStatus("Verifying...");

    setTimeout(() => {
      setAadhaarStatus("Aadhaar Verified ✅");
    }, 1500);
  };

  const onSubmit = (data) => {
    setFormData((prev) => ({
      ...prev,
      kyc: data,
    }));

    alert("Step 3 Saved");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Step 3 - KYC Verification
        </h2>

        {/* PAN */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            PAN Number
          </label>

          <input
            type="text"
            placeholder="ABCDE1234F"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("pan", {
              required: "PAN is required",
              pattern: {
                value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                message: "Invalid PAN format",
              },
            })}
          />

          <div className="flex items-center justify-between mt-2">
            <button
              type="button"
              onClick={verifyPAN}
              className="text-sm bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300 transition"
            >
              Verify PAN
            </button>

            <p className="text-sm font-medium text-green-600">
              {panStatus}
            </p>
          </div>

          <p className="text-red-500 text-sm mt-1">
            {errors.pan?.message}
          </p>
        </div>

        {/* Aadhaar */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Aadhaar Number
          </label>

          <input
            type="text"
            placeholder="123412341234"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("aadhaar", {
              required: "Aadhaar is required",
              pattern: {
                value: /^[0-9]{12}$/,
                message: "Aadhaar must be 12 digits",
              },
            })}
          />

          <div className="flex items-center justify-between mt-2">
            <button
              type="button"
              onClick={verifyAadhaar}
              className="text-sm bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300 transition"
            >
              Verify Aadhaar
            </button>

            <p className="text-sm font-medium text-green-600">
              {aadhaarStatus}
            </p>
          </div>

          <p className="text-red-500 text-sm mt-1">
            {errors.aadhaar?.message}
          </p>
        </div>

        {/* Consent */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            className="mt-1 w-4 h-4"
            {...register("consent", {
              required: "Consent is required",
            })}
          />

          <label className="text-sm text-gray-700">
            I agree to KYC verification and allow data processing
          </label>
        </div>

        <p className="text-red-500 text-sm">
          {errors.consent?.message}
        </p>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Validate Step 3
        </button>
      </form>
    </div>
  );
}