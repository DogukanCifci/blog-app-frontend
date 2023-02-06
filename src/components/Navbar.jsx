import React, { useContext, useEffect, useState } from "react";
import {
  About,
  AddNew,
  Home,
  Image,
  LeftSide,
  LoginLogout,
  MyLink,
  NavbarContainer,
  Profile,
  Register,
  RightSide,
} from "../styles/Navbar";
import image1 from "../assets/ok.png";
import { AuthContext, userHandle } from "../context/AuthContextProvider";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  console.log(user); //to check isUserExist

  //Variablen Definieren
  const [loginText, setLoginText] = useState("Login");
  useEffect(() => {
    user?.name ? setLoginText("Logout") : setLoginText("Login");
  }, [user]);

  //LOGIN-LOGOUT
  const LoginLogoutHandle = () => {
    if (user?.name) {
      userHandle(user, setUser);
    }
  };

  return (
    <NavbarContainer>
      <LeftSide>
        <Image src={image1} />
      </LeftSide>
      <RightSide>
        <MyLink to="/">
          <Home>Home</Home>
        </MyLink>
        <MyLink to="/about">
          <About>About</About>
        </MyLink>
        <MyLink to="/profile">
          <Profile user={user}>Profile</Profile>
        </MyLink>
        <MyLink to="/addnew">
          <AddNew user={user}>Add New</AddNew>
        </MyLink>
        <MyLink to="/login">
          <LoginLogout onClick={() => LoginLogoutHandle()}>
            {loginText}
          </LoginLogout>
        </MyLink>
        <MyLink to="/register">
          <Register user={user}>Register</Register>
        </MyLink>
      </RightSide>
    </NavbarContainer>
  );
};
export default Navbar;
