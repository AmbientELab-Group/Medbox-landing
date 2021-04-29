import { AnimateSharedLayout, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";

const LinksContainer = styled.ul`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  flex-basis: 50%;
  max-width: 1100px;
  justify-content: space-evenly;
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
    font-weight: 600;
    white-space: nowrap;
    font-size: 1.5rem;
  }
  span {
    height: 3px;
    width: 100%;
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const NavLinks = ({
  className,
  links,
  selectedLink,
  direction,
  handleLinkClick,
}) => {
  const { t } = useTranslation();

  return (
    <AnimateSharedLayout>
      <LinksContainer $direction={direction} className={className}>
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
