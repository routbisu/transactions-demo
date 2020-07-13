import styled from 'styled-components';

export const H1 = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.7rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.06rem;
  padding-left: 12px;
  border-left: 12px solid ${(props) => props.theme.colors.primary};
`;

export const Page = styled.div`
  max-width: ${(props) => props.theme.maxPageWidth};
  margin: auto;
  padding: 30px 15px;
`;
