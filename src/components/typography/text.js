import styled from "styled-components";

const Text = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.fontSecondary};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.typography.fontMedium};
  }
`;

export default Text;
