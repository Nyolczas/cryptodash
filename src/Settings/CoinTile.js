import React from 'react';
import { AppContext } from '../App/AppProvider';
import { SelectableTile, DeletableTile } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGid';
import CoinImage from '../Shared/CoinImage';

export default ({ coinKey, topSection }) => {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        let coin = coinList[coinKey];
        const TileClass = topSection ? DeletableTile : SelectableTile;
        return (
          <TileClass>
            <CoinHeaderGrid
              topSection={topSection}
              name={coin.CoinName}
              symbol={coin.Symbol}
            />
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
};
