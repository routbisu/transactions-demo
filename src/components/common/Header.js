import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H1 } from './Elements';

const HeaderContainer = styled.header`
  padding-left: 15px;
  display: flex;
  align-items: center;
`;

const HeaderText = styled.div`
  flex: 1;
`;

const HeaderDescription = styled.div`
  color: ${(props) => props.theme.colors.lightGrey};
  margin-top: 10px;
  font-size: 1.05rem;
  font-weight: 300;
`;

const ArrowHolder = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  span {
    font-size: 0.9rem;
    text-transform: uppercase;
    padding: 5px;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const Header = ({ heading, description }) => {
  return (
    <HeaderContainer>
      <HeaderText>
        <H1>{heading}</H1>
        {description && <HeaderDescription>{description}</HeaderDescription>}
      </HeaderText>
      <ArrowHolder>
        ← <span>Back</span>
      </ArrowHolder>
    </HeaderContainer>
  );
};

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Header;
