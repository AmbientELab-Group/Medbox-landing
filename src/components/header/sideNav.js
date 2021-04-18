import React from "react";
import styled from "styled-components";
import Burger from "./burger";
import NavLinks from "./navLinks";
import ClickAway from "./clickAway";
import { AnimatePresence, motion } from "framer-motion";

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
  max-width: fit-content;
  ul {
    padding: 5rem 3rem;
    li {
      padding: 1rem 0;
    }
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const SideNav = ({
  links,
  selectedLink,
  handleLinkClick,
  isSidenavOpen,
  setIsSidenavOpen,
}) => {
  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };
  return (
    <div>
      <Burger isSidenavOpen={isSidenavOpen} clickHandler={toggleSidenav} />
      <AnimatePresence>
        {isSidenavOpen && (
          <div>
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
            </NavContainer>
            <ClickAway
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ type: "linear", duration: 0.3 }}
              onClick={() => setIsSidenavOpen(false)}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideNav;
