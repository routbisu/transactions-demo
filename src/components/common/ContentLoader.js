import React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  max-width: 600px;
  span {
    height: 20px;
    flex: 1;
    border-radius: 30px;
    animation: flash 0.8s infinite ease-in-out;

    &:not(:last-child) {
      margin-right: 15px;
    }
  }

  .header {
    display: flex;
    span {
      background: ${(props) => props.theme.colors.primary};
    }
  }

  .record {
    display: flex;
    margin-top: 13px;
    span {
      background: ${(props) => props.theme.colors.lightGrey};
    }
  }

  @keyframes flash {
    0% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0.3;
    }
  }
`;

const ContentLoader = ({ cols = 4, rows = 3 }) => {
  return (
    <LoaderContainer>
      <div className="header">
        {[...new Array(cols)].map((_, i) => (
          <span />
        ))}
      </div>

      {[...new Array(rows)].map((_, i) => (
        <div className="record">
          {[...new Array(cols)].map((_, i) => (
            <span />
          ))}
        </div>
      ))}
    </LoaderContainer>
  );
};

export default ContentLoader;
