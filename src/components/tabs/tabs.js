import React, { useState } from "react";
import styled from "styled-components";
import TabNav from "./tabNav";
import TabContent from "./tabContent";

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 3rem;
  }
`;

const Tabs = ({ tabs, ...rest }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabsContainer {...rest}>
      <TabNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        titles={tabs.map((tab) => tab.title)}
      />
      <TabContent tab={tabs[activeTab]} />
    </TabsContainer>
  );
};

export default Tabs;
