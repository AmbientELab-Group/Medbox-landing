import React from "react";
import styled from "styled-components";
import Section from "../components/section";
import { useTranslation } from "react-i18next";
import Title from "../components/typography/title";
import TeamMember from "../components/teamMember";
import { useStaticQuery, graphql } from "gatsby";
import Slider from "../components/slider";

const SectionLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 4rem;
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
  console.log(membersPages);

  return (
    <Section id={id}>
      <SectionLayout>
        <Title>{t("sections.about.title")}</Title>
        <Slider>
          {membersPages.map((page) => (
            <MembersWrapper>
              {page.map((member) => (
                <TeamMember
                  key={member.name}
                  name={member.name}
                  role={t(member.role)}
                  photo={member.photo}
                  photoAlt={t("Image of ") + member.name}
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
