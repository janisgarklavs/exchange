import React from "react";

import { ExchangeRates } from "./ExchangeRates";

import { Exchange as IExchange } from "../store/exchange/types";

interface ExchangeProps {
  data: IExchange;
}

export const Exchange: React.SFC<ExchangeProps> = ({ data }) => (
  <>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid black",
        padding: "12px 24px"
      }}
    >
      <div style={{ fontWeight: "bold" }}>
        Base: <span>{data.base}</span>
      </div>
      <div style={{ fontWeight: "bold" }}>
        Date: <span>{data.date}</span>
      </div>
    </div>

    <ExchangeRates rates={data.rates} />
  </>
);
