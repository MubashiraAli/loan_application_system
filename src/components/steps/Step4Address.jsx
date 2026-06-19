import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { FormContext } from "../../context/FormContext";

export default function Step4Address() {
  const { setFormData } = useContext(FormContext);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [location, setLocation] = useState({
    city: "",
    state: "",
  });

  const pinCodeLookup = (pin) => {
    const pinData = {
      "682030": { city: "Kochi", state: "Kerala" },
      "560001": { city: "Bangalore", state: "Karnataka" },
      "110001": { city: "New Delhi", state: "Delhi" },
    };

    if (pinData[pin]) {
      setLocation(pinData[pin]);
      setValue("city", pinData[pin].city);
      setValue("state", pinData[pin].state);
    } else {
      setLocation({ city: "", state: "" });
    }
  };

  const onSubmit = (data) => {
    setFormData((prev) => ({
      ...prev,
      address: data,
    }));

    alert("Step 4 Saved");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Step 4 - Address Details
        </h2>

        {/* Address Line */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address Line
          </label>

          <textarea
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("address", {
              required: "Address is required",
            })}
          />

          <p className="text-red-500 text-sm mt-1">
            {errors.address?.message}
          </p>
        </div>

        {/* PIN Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            PIN Code
          </label>

          <input
            type="text"
            maxLength={6}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("pinCode", {
              required: "PIN Code is required",
              pattern: {
                value: /^[0-9]{6}$/,
                message: "PIN Code must be 6 digits",
              },
              onChange: (e) => pinCodeLookup(e.target.value),
            })}
          />

          <p className="text-red-500 text-sm mt-1">
            {errors.pinCode?.message}
          </p>
        </div>

        {/* City + State (Auto-filled highlight) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>

            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              {...register("city", {
                required: "City is required",
              })}
            />

            <p className="text-red-500 text-sm mt-1">
              {errors.city?.message}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>

            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              {...register("state", {
                required: "State is required",
              })}
            />

            <p className="text-red-500 text-sm mt-1">
              {errors.state?.message}
            </p>
          </div>
        </div>

        {/* Residence Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Residence Type
          </label>

          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("residenceType", {
              required: "Residence Type is required",
            })}
          >
            <option value="">Select Residence Type</option>
            <option value="owned">Owned</option>
            <option value="rented">Rented</option>
            <option value="family">Family House</option>
          </select>

          <p className="text-red-500 text-sm mt-1">
            {errors.residenceType?.message}
          </p>
        </div>

        {/* Years at Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Years at Current Address
          </label>

          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            {...register("yearsAtAddress", {
              required: "Years at Address is required",
            })}
          />

          <p className="text-red-500 text-sm mt-1">
            {errors.yearsAtAddress?.message}
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Validate Step 4
        </button>
      </form>
    </div>
  );
}