import React, { useState } from "react";
import { createContext } from "react";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Dogu" });
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

// Bu yapi sabit olarak kullaniliyor. Istersem burada global olarak kullanacagim degiskenleri atayabilirim.
