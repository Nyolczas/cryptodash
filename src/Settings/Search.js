import React from 'react';
import styled from 'styled-components';
import { backgroundColor2, fontColorWhite, fontSize } from '../Shared/Styles';
import { AppContext } from '../App/AppProvider';
import _ from 'lodash';
import fuzzy from 'fuzzy';

const SearchGrid = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  max-width: 600px;
  flex-wrap: wrap;
`;
const SearchText = styled.h2`
  font-weight: normal;
  margin-right: 1rem;
`;
const SearchInput = styled.input`
  ${backgroundColor2};
  ${fontSize};
  ${fontColorWhite};
  height: 2rem;
  flex-grow: 1;
  min-width: 300px;
`;

const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
  // get all the coin symbols
  let coinSymbols = Object.keys(coinList);
  // get all the coin names, map symbol to name
  let coinNames = coinSymbols.map((symbol) => coinList[symbol].CoinName);
  let allStringsToSearch = coinSymbols.concat(coinNames);
  let fuzzyResults = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map((result) => result.string);

  let filteredCoins = _.pickBy(coinList, (result, symKey) => {
    let coinName = result.CoinName;
    return (
      _.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName)
    );
  });
  console.log(filteredCoins);
  setFilteredCoins(filteredCoins);
}, 300);

function filterCoins(e, setFilteredCoins, coinList) {
  let inputValue = e.target.value;
  if(!inputValue){
    setFilteredCoins(null);
    return;
  }
  handleFilter(inputValue, coinList, setFilteredCoins);
}

export default () => {
  return (
    <AppContext.Consumer>
      {({ setFilteredCoins, coinList }) => (
        <SearchGrid>
          <SearchText>Search all coins: </SearchText>
          <SearchInput
            type='text'
            onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}
          />
        </SearchGrid>
      )}
    </AppContext.Consumer>
  );
};
