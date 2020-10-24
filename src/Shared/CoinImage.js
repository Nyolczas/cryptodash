import React from 'react';
import styled from 'styled-components';

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;
export default ({ coin, style }) => {
  return (
    <Center>
      <img
        alt={coin.CoinSymbol}
        style={style || { height: '50px' }}
        src={`http://cryptocompare.com/${coin.ImageUrl}`}
      />
    </Center>
  );
};
