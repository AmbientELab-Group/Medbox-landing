import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.375rem;
  color: ${({ theme }) => theme.colors.fontPrimary};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 3.125rem;
  }
`;

export default Title;
