import React from 'react';
import styled, { css } from 'styled-components';

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const CoinImage = styled.img`
  height: 3rem;
  ${(props) =>
    props.spotlight &&
    css`
      height: 12rem;
    `}
`;
export default ({ coin, spotlight }) => {
  return (
    <Center>
      <CoinImage
        spotlight={spotlight}
        alt={coin.CoinSymbol}
        src={`http://cryptocompare.com/${coin.ImageUrl}`}
      />
    </Center>
  );
};
