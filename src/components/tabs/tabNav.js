import React from "react";
import { AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";
import TabNavItem from "./tabNavItem";
import { useTranslation } from "react-i18next";

const TabNavContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  overflow: scroll;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 4rem 4rem;
    overflow: initial;
  }
`;

const TabNav = ({ titles, activeTab, setActiveTab }) => {
  const { t } = useTranslation("device");

  return (
    <AnimateSharedLayout>
      <TabNavContainer>
        {titles.map((title, idx) => (
          <TabNavItem
            isActive={activeTab === idx}
            onClick={() => setActiveTab(idx)}
            key={title}
          >
            {t(title)}
          </TabNavItem>
        ))}
      </TabNavContainer>
    </AnimateSharedLayout>
  );
};

export default TabNav;
