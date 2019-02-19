export interface Exchange {
  base: string;
  date: string;
  rates: Record<string, number>;
}

export type ApiResponse = Record<string, any>;

export enum ExchangeActionTypes {
  FETCH_REQUEST = "@@exchange/FETCH_REQUEST",
  FETCH_SUCCESS = "@@exchange/FETCH_SUCCESS",
  FETCH_ERROR = "@@exchange/FETCH_ERROR"
}

export interface ExchangeState {
  readonly loading: boolean;
  readonly data?: Exchange;
  readonly errors?: string;
}
