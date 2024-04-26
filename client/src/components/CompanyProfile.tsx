import { useLoaderData } from "react-router-dom";
import { CompanyProfile as CompanyProfileType } from "../types";
import { getInfoCardElements } from "../utils";
import { InfoCard } from "./InfoCard";

export const CompanyProfile = () => {
  const companyProfileData = useLoaderData() as CompanyProfileType;

  const infoCardElements = getInfoCardElements(companyProfileData);
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
              <div
                className="inline-flex m-4 rounded-md shadow-sm"
                role="group"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
