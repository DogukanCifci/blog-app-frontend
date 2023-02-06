import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: red;
  justify-content: space-evenly;
`;

export const LeftSide = styled.div`
  width: 50%;
  border: 1px solid black;
  display: flex;
  padding: 0 15px;
  align-items: center;
`;

export const Image = styled.img`
  height: 50px;
`;

// ###########RIGHT PART############
export const RightSide = styled(LeftSide)`
  justify-content: flex-end;
`;

export const MyLink = styled(Link)`
  display: flex;
  margin: 10px;
  text-decoration: none;
`;

// ############TIKLAMA YAZILARI##########
export const LinkDiv = styled.div`
  color: white;
  font-weight: 700;
`;
export const Home = styled(LinkDiv)``;
export const About = styled(LinkDiv)``;
export const Profile = styled(LinkDiv)`
  display: ${({ user }) => (user ? "" : "none")};
`;
export const AddNew = styled(LinkDiv)``;
export const LoginLogout = styled(LinkDiv)``;
export const Register = styled(LinkDiv)``;

// #####Bitis######
