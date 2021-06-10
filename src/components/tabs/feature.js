import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.25rem;
  }
`;

const FeatureDescription = styled.p`
  font-size: 0.8rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.625rem;
  }
`;

const Feature = ({ feature }) => {
  const { t } = useTranslation("device");
  return (
    <FeatureContainer>
      <FeatureTitle>{t(feature.title)}</FeatureTitle>
      <FeatureDescription>{t(feature.description)}</FeatureDescription>
    </FeatureContainer>
  );
};

export default Feature;
