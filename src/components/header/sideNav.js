import React from "react";
import styled from "styled-components";
import Burger from "./burger";
import NavLinks from "./navLinks";
import ClickAway from "./clickAway";
import { AnimatePresence, motion } from "framer-motion";
import OutlineLinkButton from "../outlineLinkButton";
import { useTranslation } from "gatsby-plugin-react-i18next";
import LanguagePicker from "./languagePicker";

const NavContainer = styled(motion.div)`
  height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: fit-content;
  ul:first-child {
    padding: 5rem 3rem;
    padding-bottom: 2rem;
    li {
      padding: 1rem 0;
    }
  }
`;

const LanguageChoice = styled(LanguagePicker)`
  padding: 3rem 0;
`;

const SyledOutlineButton = styled(OutlineLinkButton)`
  font-size: 1.25rem;
`;

const SideNav = ({
  links,
  selectedLink,
  handleLinkClick,
  isSidenavOpen,
  setIsSidenavOpen,
}) => {
  const { t } = useTranslation();
  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };


  return (
    <>
      <Burger isSidenavOpen={isSidenavOpen} clickHandler={toggleSidenav} />
      <AnimatePresence>
        {isSidenavOpen && (
          <>
            <NavContainer
              initial={{ translateX: "100%" }}
              animate={{ translateX: "0%" }}
              exit={{ translateX: "100%" }}
              transition={{ type: "linear", duration: 0.3 }}
            >
              <NavLinks
                links={links}
                selectedLink={selectedLink}
                handleLinkClick={handleLinkClick}
                direction="column"
                onLinkClick={toggleSidenav}
              />
              <SyledOutlineButton>{t("signIn")}</SyledOutlineButton>
              <LanguageChoice />
            </NavContainer>
            <ClickAway
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ type: "linear", duration: 0.3 }}
              onClick={() => setIsSidenavOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideNav;
