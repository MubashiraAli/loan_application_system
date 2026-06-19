import { createContext, useState, useEffect } from "react";

export const FormContext = createContext();

export function FormProvider({ children }) {

 const [formData, setFormData] = useState(() => {
  const saved = localStorage.getItem("loanForm");

  return saved
    ? JSON.parse(saved)
    : {
        loanDetails: {},
        personalInfo: {},
        kyc: {},
        address: {},
        employment: {},
        coApplicant: {},
        documents: {},
      };
});
useEffect(() => {
  localStorage.setItem(
    "loanForm",
    JSON.stringify(formData)
  );
}, [formData]);

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}