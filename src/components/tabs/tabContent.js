import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "react-i18next";
import Feature from "./feature";

const TabContentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: center;
    flex-direction: row;
  }
`;

const TabFeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  height: 300px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: space-evenly;
    flex: 1;
    margin-left: 3rem;
    height: 80%;
  }
`;

const TabImageContainer = styled.div`
  display: flex;
  height: 300px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex: 1;
    height: 700px;
    margin-right: 3rem;
  }
`;

const TabContent = ({ tab }) => {
  const { t } = useTranslation("common");

  return (
    <TabContentContainer>
      <TabImageContainer>
        <GatsbyImage
          image={getImage(tab.photo)}
          alt={t("renderAlt")}
          imgStyle={{ objectFit: "contain" }}
        />
      </TabImageContainer>
      <TabFeaturesContainer>
        {tab.features.map((feature) => (
          <Feature feature={feature} key={feature.title} />
        ))}
      </TabFeaturesContainer>
    </TabContentContainer>
  );
};

export default TabContent;
