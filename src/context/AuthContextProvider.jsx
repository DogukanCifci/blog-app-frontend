import React from "react";
import { createContext } from "react";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

// Bu yapi sabit olarak kullaniliyor. Istersem burada global olarak kullanacagim degiskenleri atayabilirim.
