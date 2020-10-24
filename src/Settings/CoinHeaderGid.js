import React from 'react';
import styled from 'styled-components';
import { DeletableTile } from '../Shared/Tile';

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;

const DeleteIcon = styled.div`
  display: none;
  ${DeletableTile}:hover & {
    display: block;
    color: crimson;
    margin-left: 0.5rem;
  }
`;

const DeleteSvg = () => {
  return (
    <svg
      width='0.9em'
      height='0.9em'
      viewBox='0 0 16 16'
      className='bi bi-x-circle-fill'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z'
      />
    </svg>
  );
};

export default ({ name, symbol, topSection }) => {
  return (
    <Flex>
      <div> {name} </div>
      {topSection ? (
        <Flex>
          <CoinSymbol>{symbol}</CoinSymbol>
          <DeleteIcon>
            <DeleteSvg />
          </DeleteIcon>
        </Flex>
      ) : (
        <CoinSymbol> {symbol} </CoinSymbol>
      )}
    </Flex>
  );
};
