import React, { useState, useEffect } from "react";
import styled from "styled-components";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <HamburgerButton onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerButton>
      <SidebarContent className={`sidebar ${isOpen ? "open" : ""}`}>
        <CloseButton onClick={toggleSidebar}>Close</CloseButton>
        <NavLinks>
          <NavLink>
            <a href="#">ABOUT US</a>
          </NavLink>
          <NavLink>
            <a href="#">OUR TEAM</a>
          </NavLink>
          <NavLink>
            <a href="#">ABOUT WORK</a>
          </NavLink>
          <NavLink>
            <a href="#">OUR SERVICES</a>
          </NavLink>
          <NavLink>
            <a href="#">OUR FOUNDATION</a>
          </NavLink>
          <NavLink>
            <a href="#">CONTACT US</a>
          </NavLink>
        </NavLinks>
      </SidebarContent>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  position: relative;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
`;
const HamburgerButton = styled.button`
  z-index: 101;
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
  span {
    display: block;
    width: 20px;
    height: 2px;
    background-color: #333;
    margin-bottom: 5px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

const SidebarContent = styled.div`
  border-radius: 1rem;
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 350px;
  background-color: #eee;
  color: #19191a;
  padding: 20px;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;
  visibility: hidden;
  will-change: filter;
  transition: filter 300ms;
  :hover {
    filter: drop-shadow(0 0 2em #00674fc8);
  }
  &.open {
    visibility: visible;
    transform: translateX(0);
    transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }
`;

const NavLinks = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const NavLink = styled.div`
  font-size: 110%;
  margin-bottom: 15px;
  a {
    color: #19191a;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  a:hover {
    color: #efbf04;
  }
`;
