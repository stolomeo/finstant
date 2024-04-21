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
