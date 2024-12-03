import OfferLetter from "./DocumentComponents/OfferLetter";
import OfferLetterForm from "./PageComponents/components/OfferLetterForm";
import baseTheme from './themes/baseTheme'
export const efundzzCtcBreakUp = (yearlyCTC: number) => {
  const yearlyBasicSalary = (54 / 100) * yearlyCTC;
  const yearlyHRA = (27 / 100) * yearlyCTC;
  const yearlyMedicalAllowance = (6.5 / 100) * yearlyCTC;
  const transportAllowanceYearly = (5.5 / 100) * yearlyCTC;
  const yearlyCompanyContributionToEPF = (7 / 100) * yearlyCTC;
  //deductions
  const yearlyPFDeduction = (6.5 / 100) * yearlyCTC;
  const professionalTaxYearly = 200 * 12;
  const totalDeductionsYearly =
    yearlyPFDeduction + professionalTaxYearly + yearlyCompanyContributionToEPF;

  return {
    yearlyBasicSalary: Math.floor(yearlyBasicSalary),
    yearlyHRA: Math.floor(yearlyHRA),
    yearlyMedicalAllowance: Math.floor(yearlyMedicalAllowance),
    transportAllowanceYearly: Math.floor(transportAllowanceYearly),
    yearlyCompanyContributionToEPF: Math.floor(yearlyCompanyContributionToEPF),
    yearlyPFDeduction: Math.floor(yearlyPFDeduction),
    professionalTaxYearly: Math.floor(professionalTaxYearly),
    totalDeductionsYearly: Math.floor(totalDeductionsYearly),
    //monthly
    monthlyBasicSalary: Math.floor(yearlyBasicSalary / 12),
    monthlyHRA: Math.floor(yearlyHRA / 12),
    monthlyMedicalAllowance: Math.floor(yearlyMedicalAllowance / 12),
    transportAllowanceMonthly: Math.floor(transportAllowanceYearly / 12),
    monthlyCompanyContributionToEPF: Math.floor(
      yearlyCompanyContributionToEPF / 12
    ),
    monthlyPFDeduction: Math.floor(yearlyPFDeduction / 12),
    professionalTaxMonthly: Math.floor(professionalTaxYearly / 12),
    totalDeductionsMonthly: Math.floor(totalDeductionsYearly / 12),
  };
};

export const getForm = (documentType: string) => {
  // different documentType could have same inputForms
  switch (documentType) {
    case "Offer Letter":
      return <OfferLetterForm />;
    default:
      return <OfferLetterForm />;
  }
};

export const getTemplate = (documentType: string, values: any) => {
  switch (documentType) {
    case "Offer Letter":
      return <OfferLetter values={values} />;
    default:
      return <OfferLetter />;
  }
};

export const getDocumentname = (
  documentType: string,
  name: string,
  // month: any,
  // year: any
) => {
  const today = new Date();
  const year = today.getFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[today.getMonth()];
  switch (documentType) {
    // fileName={`Offer Letter-${values.name} ${month}-${year}`}
    case "offerLetter":
      return `Offer Letter-${name} ${month}-${year}`;
    default:
      return "";
  }
};

export const formatQueryParam = (
  queryString: string[] | string | undefined
) => {
  return Array.isArray(queryString) ? queryString[0] : queryString || "";
};

export const getTheme = () => {
  return baseTheme;
};