export type SearchResult = {
  currency: string;
  exchangeShortName: string;
  name: string;
  stockExchange: string;
  symbol: string;
};

export type User = {
  username: string;
  email?: string;
  password?: string;
};

export type UserAuthResponse = {
  email: string;
  username: string;
  token: string;
  message: string;
};

export type Stock = {
  id: number;
  symbol: string;
  companyName: string;
};

export type CompanyProfile = {
  companyName: string;
  price: number;
  symbol: string;
  dcf: number;
  sector: string;
  description: string;
};

export type CompanySecFilings = {
  symbol: string;
  fillingDate: string;
  acceptedDate: string;
  cik: string;
  type: string;
  link: string;
  finalLink: string;
};

export type CompanyKeyMetrics = {
  marketCapTTM: number;
  currentRatioTTM: number;
  roeTTM: number;
  returnOnTangibleAssetsTTM: number;
  freeCashFlowPerShareTTM: number;
  bookValuePerShareTTM: number;
  dividendYieldTTM: number;
  capexPerShareTTM: number;
  grahamNumberTTM: number;
  peRatioTTM: number;
};

export type CompanyProfileData = [
  CompanyProfile,
  CompanySecFilings[],
  CompanyKeyMetrics
];

export type CompanyIncomeStatement = {
  date: string;
  revenue: number;
  costOfRevenue: number;
  depreciationAndAmortization: number;
  operatingIncome: number;
  incomeBeforeTax: number;
  netIncome: number;
  netIncomeRatio: number;
  eps: number;
  epsdiluted: number;
  grossProfitRatio: number;
  operatingIncomeRatio: number;
  incomeBeforeTaxRatio: number;
};

export type CompanyBalanceSheet = {
  totalAssets: number;
  totalCurrentAssets: number;
  cashAndCashEquivalents: number;
  propertyPlantEquipmentNet: number;
  intangibleAssets: number;
  longTermDebt: number;
  totalDebt: number;
  totalLiabilities: number;
  totalCurrentLiabilities: number;
  totalStockholdersEquity: number;
  retainedEarnings: number;
};

export type CompanyCashFlow = {
  date: string;
  operatingCashFlow: number;
  netCashUsedForInvestingActivites: number;
  netCashUsedProvidedByFinancingActivities: number;
  cashAtEndOfPeriod: number;
  capitalExpenditure: number;
  commonStockIssued: number;
  freeCashFlow: number;
};

export type Column = {
  header: string;
  accessor: keyof CompanyIncomeStatement | keyof CompanyCashFlow;
};
