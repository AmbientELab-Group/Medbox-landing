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
    href: "#aboutUs",
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
  flex-basis: 50%;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const NavLinkItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0 0.2em;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.fontPrimary};
    height: fit-content;
    margin: 0 0.5em;
    font-weight: 900;
  }
  span {
    height: 3px;
    width: 100%;
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const NavLinks = () => {
  const { t } = useTranslation();
  const [selectedLink, setSelectedLink] = useState(links[0]);

  return (
    <AnimateSharedLayout>
      <LinksContainer>
        {links.map((link, i) => (
          <NavLink
            isActive={selectedLink === link}
            href={link.href}
            key={i}
            onClick={() => setSelectedLink(link)}
          >
            {t(`links.${link.translation}`)}
          </NavLink>
        ))}
      </LinksContainer>
    </AnimateSharedLayout>
  );
};

const NavLink = ({ href, isActive, onClick, children }) => {
  return (
    <NavLinkItem onClick={onClick}>
      <a href={href}>{children}</a>
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
