import React from "react";
import styled from "styled-components";
import { Link, useI18next } from "gatsby-plugin-react-i18next";

const LanguageList = styled.ul`
  display: flex;
  list-style: none;
`;

const LanguageItem = styled.li`
  margin-left: 1rem;
  font-size: 1.25rem;

  a {
    color: ${({ theme }) => theme.colors.fontSecondary};
    text-decoration: ${({ $active }) => ($active ? "underline" : "none")};
    text-decoration-color: ${({ theme }) => theme.colors.accent};
  }
`;

const LanguagePicker = ({ className }) => {
  const { languages, originalPath, language } = useI18next();
  return (
    <LanguageList className={className}>
      {languages.map((lng) => (
        <LanguageItem key={lng} $active={language === lng}>
          <Link to={originalPath} language={lng}>
            {lng.toUpperCase()}
          </Link>
        </LanguageItem>
      ))}
    </LanguageList>
  );
};

export default LanguagePicker;
