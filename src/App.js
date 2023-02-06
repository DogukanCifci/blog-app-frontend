import { useEffect } from "react";
import "./App.css";
import AuthContextProvider from "./context/AuthContextProvider";
import Router from "./router/Router";

function App() {
  const API_KEY = "AIzaSyANVuxHAs7YPTShHurhbd5C_nr0myWbAW0";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  useEffect(() => {
    //
  }, [url]);
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
}

export default App;
