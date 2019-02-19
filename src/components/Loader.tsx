import React from "react";

import "./Loader.css";

export const Loader: React.SFC = () => (
  <div className="spinner">
    <div className="bounce1" />
    <div className="bounce2" />
    <div className="bounce3" />
  </div>
);
