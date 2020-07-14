import styled from 'styled-components';

export const H1 = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.7rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.06rem;
  padding-left: 12px;
  border-left: 12px solid ${(props) => props.theme.colors.primary};
  @media screen and (max-width: 500px) {
    font-size: 1.4rem;
  }
`;

export const Page = styled.div`
  max-width: ${(props) => props.theme.maxPageWidth};
  margin: auto;
  padding: 30px 15px;
  background: ${(props) => props.theme.colors.white};
`;

export const PageContent = styled.div`
  margin-top: 20px;
  padding: 15px;
  overflow-x: auto;
`;

export const SubTitle = styled.div`
  font-size: 0.85rem;
  color: ${(props) => props.theme.colors.lightGrey};
  margin: 20px 0px;
  padding-left: 5px;
`;
