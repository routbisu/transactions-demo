import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H1 } from './Elements';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  padding: 0px 15px;
  display: flex;
  align-items: flex-start;
`;

const HeaderText = styled.div`
  flex: 1;
`;

const HeaderDescription = styled.div`
  color: ${(props) => props.theme.colors.lightGrey};
  margin-top: 10px;
  font-size: 1.05rem;
  font-weight: 300;
  @media screen and (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

const ArrowHolder = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.07rem;
  text-transform: uppercase;
  span {
    font-size: 1.5rem;
    padding-right: 5px;
    color: ${(props) => props.theme.colors.primary};
    position: relative;
    left: 0px;
    transition: 0.3s ease-in-out;
  }
  &:hover {
    span {
      left: -4px;
      transition: 0.3s ease-in-out;
    }
  }
`;

const Header = ({ heading, description, backLink }) => {
  return (
    <HeaderContainer>
      <HeaderText>
        <H1>{heading}</H1>
        {description && <HeaderDescription>{description}</HeaderDescription>}
      </HeaderText>
      {backLink && (
        <Link to={backLink}>
          <ArrowHolder>
            <span>←</span>Back
          </ArrowHolder>
        </Link>
      )}
    </HeaderContainer>
  );
};

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string,
  backLink: PropTypes.string,
};

export default Header;
