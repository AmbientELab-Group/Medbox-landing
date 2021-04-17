import { AnimateSharedLayout, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const links = [
  {
    translation: "home",
    href: "#home",
  },
  {
    translation: "aboutUs",
    href: "#about",
  },
  //   {
  //     translation: "project",
  //     href: "#project",
  //   },
  {
    translation: "device",
    href: "#device",
  },
  {
    translation: "contact",
    href: "#contact",
  },
];

const LinksContainer = styled.ul`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  flex-basis: 50%;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  text-align: center;
`;

const NavLinkItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0 0.2em;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent !important;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0) !important;
  & :focus {
    outline: none !important;
  }
  p {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.fontPrimary};
    height: fit-content;
    margin: 0 0.5em;
    font-weight: 900;
    white-space: nowrap;
  }
  span {
    height: 3px;
    width: 100%;
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const NavLinks = ({ direction, onLinkClick }) => {
  const { t } = useTranslation();
  const [selectedLink, setSelectedLink] = useState(links[0]);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setTimeout(() => {
      window.location.href = link.href;
      if (onLinkClick) {
        onLinkClick();
      }
    }, 250);
  };

  return (
    <AnimateSharedLayout>
      <LinksContainer direction={direction}>
        {links.map((link, i) => (
          <NavLink
            isActive={selectedLink === link}
            key={i}
            onClick={() => handleLinkClick(link)}
          >
            {t(`links.${link.translation}`)}
          </NavLink>
        ))}
      </LinksContainer>
    </AnimateSharedLayout>
  );
};

const NavLink = ({ isActive, onClick, children }) => {
  return (
    <NavLinkItem onClick={onClick}>
      <p>{children}</p>
      {isActive && (
        <motion.span layoutId="underline" initial={false} transition={spring} />
      )}
    </NavLinkItem>
  );
};

export default NavLinks;

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};
