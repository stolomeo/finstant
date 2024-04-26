import { useLoaderData } from "react-router-dom";
import { CompanyData } from "../types";
import { getInfoCardElements } from "../utils";
import { InfoCard } from "./InfoCard";
import { SecFiling } from "./SecFiling";

export const CompanyProfile = () => {
  const companyData = useLoaderData() as CompanyData;
  const profileData = companyData[0];
  const secFilings = companyData[1].slice(0, 7);

  const infoCardElements = getInfoCardElements(profileData);
  return (
    <>
      <div className="w-5/6 xl:w-full">
        <div className="relative pt-20 pb-32">
          <div className="w-full px-4 mx-auto md:px-6">
            <div className="flex flex-wrap">
              {infoCardElements.map((item, index) => (
                <InfoCard
                  key={index}
                  title={item.title}
                  subTitle={item.subTitle}
                />
              ))}
              <div className="inline-flex gap-3 m-4 rounded-md shadow-sm">
                {secFilings.map((item) => (
                  <SecFiling
                    key={item.symbol}
                    type={item.type}
                    symbol={item.symbol}
                    filingDate={item.fillingDate}
                  />
                ))}
              </div>
              <p className="p-3 m-4 mt-1 font-medium rounded-lg shadow bg-gray-50 dark:bg-gray-800 text-medium">
                {profileData.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
