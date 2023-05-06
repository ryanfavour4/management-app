// Create the RootStore
import React from "react";
import AuthContext from "./AuthContext";

export const RootStore = ({ children }) => {
  return (
    <AuthContext>
      {children}
    </AuthContext>
  );
};
