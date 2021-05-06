import React from "react";
import styled from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const MemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: fit-content;
  width: 40%;
  height: 30%;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 30%;
    height: 50%;
  }
`;

const Name = styled.p`
  font-size: 0.6875rem;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.fontPrimary};
  margin-top: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.fontMedium};
  }
`;

const Role = styled.p`
  font-size: 0.625rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.fontSecondary};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.fontMedium};
  }
`;

const GatsbyImageStyled = styled(GatsbyImage)`
  width: 80%;
  height: auto;
  max-height: 100%;
  max-width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 50%;
  }
`;

const TeamMember = ({ name, role, photo, photoAlt }) => {
  return (
    <MemberWrapper>
      <GatsbyImageStyled
        image={getImage(photo)}
        alt={photoAlt}
        imgStyle={{ objectFit: "contain" }}
      />
      <Name>{name}</Name>
      <Role>{role}</Role>
    </MemberWrapper>
  );
};

export default TeamMember;
