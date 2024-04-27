import { useLoaderData } from "react-router-dom";
import { CompanyData } from "../types";
import { getInfoCardElements, getKeyMetricElements } from "../utils";
import { InfoCard } from "./InfoCard";
import { KeyMetric } from "./KeyMetric";
import { SecFiling } from "./SecFiling";

export const CompanyProfile = () => {
  const companyData = useLoaderData() as CompanyData;
  const profileData = companyData[0];
  const secFilings = companyData[1].slice(0, 7);
  const keyMetrics = companyData[2];

  const infoCardElements = getInfoCardElements(profileData);
  const keyMetricElements = getKeyMetricElements(keyMetrics);
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
                {secFilings.map((item, index) => (
                  <SecFiling
                    key={index}
                    type={item.type}
                    symbol={item.symbol}
                    filingDate={item.fillingDate}
                    finalLink={item.finalLink}
                  />
                ))}
              </div>
              <p className="p-3 m-4 mt-1 font-medium rounded-lg shadow bg-gray-50 dark:bg-gray-800 text-medium">
                {profileData.description}
              </p>
              <div className="w-full p-4 mt-4 mb-4 ml-4 rounded-lg shadow bg-gray-50 dark:bg-gray-800 sm:p-6">
                <ul className="divide-y divide-gray-200">
                  {keyMetricElements.map((item, index) => (
                    <KeyMetric
                      key={index}
                      label={item.label}
                      total={item.total}
                      description={item.description}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
