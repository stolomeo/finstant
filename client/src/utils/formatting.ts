export const formatLargeNumber = (number: number): string => {
  const absNumber = Math.abs(number);

  if (number < 0) {
    return `-${formatLargeNumber(absNumber)}`;
  }
  if (number < 1000) {
    return number.toString();
  }
  if (number < 1_000_000) {
    return (absNumber / 1000).toFixed(1) + "K";
  }
  if (number < 1_000_000_000) {
    return (absNumber / 1_000_000).toFixed(1) + "M";
  }
  if (number < 1_000_000_000_000) {
    return (absNumber / 1_000_000_000).toFixed(1) + "B";
  }
  if (number < 1_000_000_000_000_000) {
    return (absNumber / 1_000_000_000_000).toFixed(1) + "T";
  }

  return number.toExponential(1);
};

export const formatLargeMonetaryNumber = (
  number: number,
  currencySymbol: string = "$"
): string => {
  const absNumber = Math.abs(number);
  const sign = number < 0 ? "-" : "";

  if (absNumber < 1000) {
    return `${sign}${currencySymbol}${absNumber.toFixed(2)}`;
  }

  const formattedNumber = formatLargeNumber(absNumber);
  return `${sign}${currencySymbol}${formattedNumber.replace(
    /[a-zA-Z]$/,
    (m) => m
  )}`;
};

export const formatTwoDecimals = (number?: number): string => {
  if (number === undefined || number === null) return "";
  return number.toFixed(2);
};
