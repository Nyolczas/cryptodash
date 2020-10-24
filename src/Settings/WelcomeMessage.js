import React from 'react';
import { AppContext } from '../App/AppProvider';
import styled from 'styled-components';

const Style = styled.div`
  margin-bottom: 1.5rem;
`;
export default () => {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? (
          <Style>
            Welcome to CryptoDash, please select your favorite coins to begin.
          </Style>
        ) : null
      }
    </AppContext.Consumer>
  );
};
