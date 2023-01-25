import React from "react";
import "./App.scss";
import "./normalize.scss";

export const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};
