import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import mainLogo from "../../assets/img/company/mainLogoOnly.png";
import companyName from "../../assets/img/company/mainNameOnly.png";
export default function TopNavBar() {
  return (
    <NavContainer>
      <Logo>
        <Link to="/">
          <MainLogo src={mainLogo} alt="Logo" />
          <CompanyName src={companyName} alt=" NameLogo" />
        </Link>
      </Logo>
      <NavLinks className="oswaldDB">
        <NavLink>
          <Link to="/about">ABOUT US</Link>
        </NavLink>
        <NavLink>
          <Link to="/team">OUR TEAM</Link>
        </NavLink>
        <NavLink>
          <Link to="/works">OUR WORKS</Link>
        </NavLink>
        <NavLink>
          <Link to="/services">OUR SERVICES</Link>
        </NavLink>
        <NavLink>
          <Link to="/partners">OUR PARTNERS</Link>
        </NavLink>
        <NavLink>
          <Link to="/contact">CONTACT US</Link>
        </NavLink>
      </NavLinks>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  font-family: "Lexend Light", sans-serif;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 60px;
  background-color: #eee;
  color: #111;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  box-shadow: 0 0 10px #000;
`;
const NavLink = styled.li`
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`;
const Logo = styled.div`
  margin-right: 20px;
`;

const NavLinks = styled.ul`
  list-style: none;
  margin: 0 2rem 0 0;
  padding: 0;
  display: flex;

  li {
    margin-right: 30px;
    position: relative;
  }
  a {
    color: #111;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  &:hover {
    color: #00674f;
  }

  @media (max-width: 1220px) {
    transform: translateX(200%);
    transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }
`;

const DropdownToggle = styled.a`
  cursor: pointer;
  position: relative;
  padding-right: 1rem;

  &::after {
    content: ""; // arrow down symbol
    position: absolute;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23111' d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    width: 15px;
    height: 15px;
    background-size: contain;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    color: #111;
  }
`;

const DropdownMenu = styled.ul`
  width: 150px;
  list-style-type: none;
  border-radius: 0.5rem;
  position: absolute;
  padding: 1em;
  top: 100%;
  left: 0;
  background-color: #eee;
  border: no-border;
  display: none;
  li {
    font-size: 90%;
    margin-bottom: 5px;
  }
  a {
    color: #111;
    text-decoration: none;
    &:hover {
      color: #00674f;
    }
  }
`;

const Dropdown = styled.li`
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  &:hover ${DropdownMenu} {
    display: block;
  }
`;
const DropDownList = styled.li`
  width: 100%;
`;

const MainLogo = styled.img`
  height: 45px;
`;

const CompanyName = styled.img`
  height: 35px;
  @media (max-width: 1220px) {
    display: none;
  }
`;
