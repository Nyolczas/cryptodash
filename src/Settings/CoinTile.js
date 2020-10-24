import React from 'react';
import { AppContext } from '../App/AppProvider';
import { SelectableTile, DeletableTile, DisabledTile } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGid';
import CoinImage from '../Shared/CoinImage';

const clickCoinHandler = (topSection, coinKey, addCoin, removeCoin) => {
  return topSection
    ? () => {
        removeCoin(coinKey);
      }
    : () => {
        addCoin(coinKey);
      };
};

export default ({ coinKey, topSection }) => {
  return (
    <AppContext.Consumer>
      {({ coinList, addCoin, removeCoin, isInFavorites }) => {
        let coin = coinList[coinKey];
        const TileClass = topSection
          ? DeletableTile
          : isInFavorites(coinKey)
          ? DisabledTile
          : SelectableTile;
        return (
          <TileClass
            onClick={clickCoinHandler(
              topSection,
              coinKey,
              addCoin,
              removeCoin
            )}>
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
