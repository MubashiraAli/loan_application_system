import { useState, useContext } from "react";
import { FormContext } from "./context/FormContext";

import Navbar from "./components/steps/Navbar";

import Step1LoanType from "./components/steps/Step1LoanType";
import Step2PersonalInfo from "./components/steps/Step2PersonalInfo";
import Step3KYC from "./components/steps/Step3KYC";
import Step4Address from "./components/steps/Step4Address";
import Step5Employment from "./components/steps/Step5Employment";
import Step6CoApplicant from "./components/steps/Step6CoApplicant";
import Step7Documents from "./components/steps/Step7Documents";
import Step8Review from "./components/steps/Step8Review";

function App() {
  const { formData } = useContext(FormContext);
  const [step, setStep] = useState(1);

  const loanType = formData.loanDetails?.loanType;

  const loanAmount = Number(
    formData.loanDetails?.loanAmount || 0
  );

  const showCoApplicant =
    loanType === "home" ||
    (loanType === "personal" && loanAmount > 500000) ||
    (loanType === "business" && loanAmount > 2000000);

  const totalSteps = 8;

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1LoanType />;

      case 2:
        return <Step2PersonalInfo />;

      case 3:
        return <Step3KYC />;

      case 4:
        return <Step4Address />;

      case 5:
        return <Step5Employment />;

      case 6:
        return showCoApplicant ? (
          <Step6CoApplicant />
        ) : (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">
              Co-Applicant Not Required
            </h2>
            <p>
              Based on the selected loan type and amount,
              a co-applicant is not required.
            </p>
          </div>
        );

      case 7:
        return <Step7Documents />;

      case 8:
        return <Step8Review />;

      default:
        return <Step1LoanType />;
    }
  };

  const handleNext = () => {
    if (step === 5 && !showCoApplicant) {
      setStep(7);
    } else {
      setStep((prev) => Math.min(prev + 1, 8));
    }
  };

  const handlePrevious = () => {
    if (step === 7 && !showCoApplicant) {
      setStep(5);
    } else {
      setStep((prev) => Math.max(prev - 1, 1));
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Loan Application Form
          </h1>

          {/* Progress Bar */}
          <div className="w-full h-3 bg-gray-300 rounded-full mb-5">
            <div
              className="h-full bg-green-500 rounded-full transition-all duration-300"
              style={{
                width: `${(step / totalSteps) * 100}%`,
              }}
            />
          </div>

          <h2 className="text-lg font-semibold mb-6">
            Step {step} of {totalSteps}
          </h2>

          {renderStep()}

          <div className="mt-8 flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={step === 1}
              className="px-5 py-2 bg-gray-500 text-white rounded-lg disabled:opacity-50"
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={step === 8}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;