type Props = {
  title: string;
  subTitle: string | number;
};
export const InfoCard = ({ title, subTitle }: Props) => {
  return (
    <div className="w-full px-4 lg:w-6/12 xl:w-3/12">
      <div className="relative flex flex-col min-w-0 mb-6 break-words rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800 xl:mb-0">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative flex-1 flex-grow w-full max-w-full pr-4">
              <h5 className="text-xs font-bold uppercase ">{title}</h5>
              <span className="text-xl font-bold">
                {typeof subTitle === "string"
                  ? subTitle
                  : `$${subTitle.toString()}`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
