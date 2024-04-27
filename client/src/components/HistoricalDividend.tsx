import { useLoaderData } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { CompanyHistoricalDividend } from "../types";

const sortDividends = (dividends: CompanyHistoricalDividend[]) => {
  return dividends.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
};
export const HistoricalDividend = () => {
  const historicalDividends = useLoaderData() as CompanyHistoricalDividend[];
  const sortedDividends = sortDividends(historicalDividends?.slice(0, 18));

  return (
    <>
      {sortedDividends.length > 0 ? (
        <ResponsiveContainer width={"99%"} height={500}>
          <LineChart
            data={sortedDividends}
            margin={{
              top: 10,
              right: 30,
              left: 10,
              bottom: 5,
            }}
          >
            <Line
              type="monotone"
              dataKey="dividend"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <XAxis dataKey="label" />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p className="ml-3">Company does not have a dividend!</p>
      )}
    </>
  );
};
