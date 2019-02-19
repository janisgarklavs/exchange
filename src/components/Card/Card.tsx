import React from "react";

const styleCX: React.CSSProperties = {
  maxWidth: 400,
  margin: "0 auto",
  padding: 24,
  boxShadow: "0 0 5px rgba(0, 0, 0, .2)",
  background: "white"
};

export const Card: React.SFC = ({ children }) => (
  <div style={styleCX}>{children}</div>
);
