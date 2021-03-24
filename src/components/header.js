import React from "react";
import styled from "styled-components";

import { useTranslation } from "react-i18next";

const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 8px;
  background: #f0f0f0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  a {
    text-decoration: none;
    color: black;
  }
`;

const links = [
  {
    translation: "home",
    href: "#home",
    isActive: false,
  },
  {
    translation: "aboutUs",
    href: "#aboutUs",
    isActive: false,
  },
  {
    translation: "project",
    href: "#project",
    isActive: false,
  },
  {
    translation: "device",
    href: "#device",
    isActive: false,
  },
  {
    translation: "contact",
    href: "#contact",
    isActive: false,
  },
];

const Header = () => {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      {links.map((link, i) => (
        <a href={link.href} key={i}>
          {t(`links.${link.translation}`)}
        </a>
      ))}
    </HeaderContainer>
  );
};

export default Header;
