import { useState, useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { calculateEMI } from "../../utils/emiCalculator";

export default function Step8Review() {
  const { formData } = useContext(FormContext);

  const loanAmount = Number(formData.loanDetails?.loanAmount || 0);
  const tenure = Number(formData.loanDetails?.loanTenure || 0);
  const interestRate = 10;

  const emi =
    loanAmount && tenure
      ? calculateEMI(loanAmount, interestRate, tenure)
      : 0;

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState("");

  const generateReferenceNumber = () =>
    `LS-${Math.floor(100000 + Math.random() * 900000)}`;

  const handleSubmit = () => {
    if (!termsAccepted || !privacyAccepted) {
      alert("Please accept Terms & Conditions and Privacy Policy");
      return;
    }

    const refNo = generateReferenceNumber();
    setReferenceNumber(refNo);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-2xl shadow-md text-center space-y-3">
          <h2 className="text-2xl font-bold text-green-600">
            Application Submitted Successfully ✅
          </h2>

          <p className="text-gray-600">Reference Number</p>
          <h3 className="text-xl font-semibold">{referenceNumber}</h3>

          <p className="text-gray-500">
            Thank you for your application.
          </p>
        </div>
      </div>
    );
  }

  const Card = ({ title, children }) => (
    <div className="bg-white rounded-xl shadow p-5 space-y-2">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {title}
      </h3>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center">
      <div className="w-full max-w-4xl space-y-6">

        <h2 className="text-2xl font-bold text-center text-gray-800">
          Step 8 - Review & Submit
        </h2>

        {/* LOAN DETAILS */}
        <Card title="Loan Details">
          <p>Type: {formData.loanDetails?.loanType}</p>
          <p>Amount: ₹{formData.loanDetails?.loanAmount}</p>
          <p>Tenure: {formData.loanDetails?.loanTenure} months</p>
          <p>Purpose: {formData.loanDetails?.loanPurpose}</p>
        </Card>

        {/* PERSONAL */}
        <Card title="Personal Information">
          <p>Name: {formData.personalInfo?.fullName}</p>
          <p>DOB: {formData.personalInfo?.dob}</p>
          <p>Email: {formData.personalInfo?.email}</p>
          <p>Mobile: {formData.personalInfo?.mobile}</p>
        </Card>

        {/* KYC */}
        <Card title="KYC Details">
          <p>PAN: {formData.kyc?.pan}</p>
          <p>Aadhaar: {formData.kyc?.aadhaar}</p>
          <p>
            Consent: {formData.kyc?.consent ? "Yes" : "No"}
          </p>
        </Card>

        {/* ADDRESS */}
        <Card title="Address Details">
          <p>{formData.address?.address}</p>
          <p>
            {formData.address?.city}, {formData.address?.state} -{" "}
            {formData.address?.pinCode}
          </p>
        </Card>

        {/* EMPLOYMENT */}
        <Card title="Employment Details">
          <p>Type: {formData.employment?.employmentType}</p>
          <p>Company: {formData.employment?.companyName}</p>
          <p>Income: ₹{formData.employment?.salary}</p>
        </Card>

        {/* CO APPLICANT */}
        <Card title="Co-Applicant">
          <p>Name: {formData.coApplicant?.coApplicantName}</p>
          <p>Relationship: {formData.coApplicant?.relationship}</p>
          <p>Income: ₹{formData.coApplicant?.annualIncome}</p>
        </Card>

        {/* DOCUMENTS */}
        <Card title="Documents">
          <p>PAN: {formData.documents?.panCard?.name || "Not Uploaded"}</p>
          <p>Aadhaar: {formData.documents?.aadhaarCard?.name || "Not Uploaded"}</p>
          <p>Photo: {formData.documents?.photo?.name || "Not Uploaded"}</p>
          <p>
            Bank Statement:{" "}
            {formData.documents?.bankStatement?.name || "Not Uploaded"}
          </p>
        </Card>

        {/* EMI SUMMARY */}
        <Card title="EMI Summary">
          <p>Loan Amount: ₹{loanAmount}</p>
          <p>Interest Rate: {interestRate}%</p>
          <p>Tenure: {tenure} months</p>
          <p className="text-lg font-bold text-blue-600">
            Estimated EMI: ₹{emi}
          </p>
        </Card>

        {/* AGREEMENTS */}
        <div className="bg-white p-5 rounded-xl shadow space-y-3">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            I accept Terms & Conditions
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={(e) => setPrivacyAccepted(e.target.checked)}
            />
            I accept Privacy Policy
          </label>
        </div>

        {/* SUBMIT */}
        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Submit Application
        </button>
      </div>
    </div>
  );
}