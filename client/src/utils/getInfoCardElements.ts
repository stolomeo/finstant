import { CompanyProfile } from "../types";

export const getInfoCardElements = (companyProfile: CompanyProfile) => {
  return [
    {
      title: "Company Name",
      subTitle: companyProfile.companyName,
    },
    {
      title: "Price",
      subTitle: companyProfile.price,
    },
    {
      title: "DCF",
      subTitle: parseFloat(companyProfile.dcf.toFixed(4)),
    },
    {
      title: "Sector",
      subTitle: companyProfile.sector,
    },
  ];
};
