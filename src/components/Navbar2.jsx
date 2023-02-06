import React, { useContext, useEffect, useState } from "react";
import "../styles/Navbar.scss";
import image1 from "../assets/ok.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

const Navbar2 = () => {
  const { user, setUser } = useContext(AuthContext);
  const [loginContext, setLoginContext] = useState("Login");
  useEffect(() => {
    if (user?.name) {
      setLoginContext("Logout");
    } else {
      setLoginContext("Login");
    }
  }, [user]);
  return (
    <div className="container1">
      <div className="left-part parts">
        <img src={image1} alt="ok" />
      </div>
      <div className="right-part parts">
        <Link to="/" className="link-container">
          <div className="link-container__tags">Home</div>
        </Link>
        <Link to="/" className="link-container">
          <div className="link-container__tags">About</div>
        </Link>
        <Link to="/" className="link-container">
          <div className="link-container__tags">Add New</div>
        </Link>
        <Link to="/" className="link-container">
          <div className="link-container__tags">{loginContext}</div>
        </Link>
        <Link to="/" className="link-container">
          <div className={`link-container__tags ${user?.name ? "none" : ""}`}>
            Register
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Navbar2;
