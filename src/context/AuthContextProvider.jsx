import React, { useState } from "react";
import { createContext } from "react";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Dogukan" });

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;

// Bu yapi sabit olarak kullaniliyor. Istersem burada global olarak kullanacagim degiskenleri atayabilirim.
