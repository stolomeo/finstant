import { CompanyProfile } from "../types";

export const getInfoCardElements = (companyData: CompanyProfile) => {
  return [
    {
      title: "Company Name",
      subTitle: companyData.companyName,
    },
    {
      title: "Price",
      subTitle: companyData.price,
    },
    {
      title: "DCF",
      subTitle: parseFloat(companyData.dcf.toFixed(4)),
    },
    {
      title: "Sector",
      subTitle: companyData.sector,
    },
  ];
};
