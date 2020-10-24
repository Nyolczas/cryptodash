import React from 'react';
import { AppContext } from '../App/AppProvider';
import styled, { css } from 'styled-components';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
`;

const getCoinsToDisplay = (coinList, topSection, favorites) => {
  return topSection ? favorites : Object.keys(coinList).slice(0, 100);
};
export default ({ topSection }) => {
  return (
    <AppContext.Consumer>
      {({ coinList, favorites }) => (
        <CoinGridStyled>
          {getCoinsToDisplay(coinList, topSection, favorites).map((coinKey) => (
            <CoinTile key={coinKey} topSection={topSection} coinKey={coinKey} />
          ))}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
};
