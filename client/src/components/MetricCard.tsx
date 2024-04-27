type Props = {
  label: string;
  total: string | number;
  description?: string;
};
export const MetricCard = ({ label, total, description }: Props) => {
  return (
    <li className="py-6 sm:py-6">
      <div className="flex items-center space-x-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-200">
            {label}
          </p>
          {description && (
            <p className="text-sm text-gray-500 truncate dark:text-gray-300">
              {description}
            </p>
          )}
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-gray-50">
          {total}
        </div>
      </div>
    </li>
  );
};
