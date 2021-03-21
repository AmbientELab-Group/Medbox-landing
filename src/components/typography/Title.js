import styled from "styled-components";

const Title = styled.h1`
    font-size: ${({ theme }) => theme.typography.fontExtraLarge};
    color: ${({ theme }) => theme.colors.fontPrimary};
`;

export default Title;
