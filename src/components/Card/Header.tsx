import React from "react";

const styleCX: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};

export const Header: React.SFC = ({ children }) => (
  <div style={styleCX}>{children}</div>
);
