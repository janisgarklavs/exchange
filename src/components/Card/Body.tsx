import React from "react";

const styleCX: React.CSSProperties = {};

export const Body: React.SFC = ({ children }) => (
  <div style={styleCX}>{children}</div>
);
