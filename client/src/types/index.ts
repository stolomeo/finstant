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
  symbol: string;
  price: number;
  beta: number;
  volAvg: number;
  mktCap: number;
  lastDiv: number;
  range: string;
  changes: number;
  companyName: string;
  currency: string;
  cik: string;
  isin: string;
  exchange: string;
  exchangeShortName: string;
  industry: string;
  website: string;
  description: string;
  ceo: string;
  sector: string;
  counter: string;
  fullTimeEmployees: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  dcfDiff: number;
  dcf: number;
  image: string;
  ipoDate: string;
  defaultImage: boolean;
  isEtf: boolean;
  isActivelyTrading: boolean;
  isAdr: boolean;
  isFund: boolean;
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

export type CompanyData = [CompanyProfile, CompanySecFilings[]];
