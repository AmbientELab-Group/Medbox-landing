import React from "react";
import styled from "styled-components";
import Section from "../components/section";
import { useTranslation } from "react-i18next";
import Title from "../components/typography/title";
import TeamMember from "../components/teamMember";
import { useStaticQuery, graphql } from "gatsby";
import Slider from "../components/slider";

const SectionLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 2rem 4rem;
  }
`;

const MembersWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const AboutSection = ({ id }) => {
  const { t } = useTranslation();
  const { allMembersJson } = useStaticQuery(graphql`
    query AboutSectionQuery {
      allMembersJson {
        edges {
          node {
            members {
              name
              role
              photo {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  `);
  const membersPages = allMembersJson.edges.map((edge) => edge.node.members);

  return (
    <Section id={id}>
      <SectionLayout>
        <Title>{t("sections.about.title")}</Title>
        <Slider>
          {membersPages.map((page, idx) => (
            <MembersWrapper key={idx}>
              {page.map((member, idx) => (
                <TeamMember
                  key={member.name + idx}
                  name={member.name}
                  role={member.role}
                  photo={member.photo}
                  photoAlt={t("sections.about.alt", { name: member.name })}
                />
              ))}
            </MembersWrapper>
          ))}
        </Slider>
      </SectionLayout>
    </Section>
  );
};

export default AboutSection;
