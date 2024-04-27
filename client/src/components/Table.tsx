/* eslint-disable @typescript-eslint/no-explicit-any */
import { Column } from "../types";

type Props = {
  columns: Column[];
  rows: any[];
};

export const Table = ({ columns, rows }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow dark:bg-gray-950 lg:p-4">
      <table className="min-w-full m-5 divide-y divide-gray-200 dark:bg-gray-900">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-gray-50"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((item, index) => (
            <tr key={index}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="p-3">
                  {item[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
