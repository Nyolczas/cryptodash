import React from 'react';
import styled from 'styled-components';
import { backgroundColor2, fontColorWhite, fontSize } from '../Shared/Styles';

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

export default () => {
  return (
    <SearchGrid>
      <SearchText>Search all coins: </SearchText>
      <SearchInput type='text' />
    </SearchGrid>
  );
};
