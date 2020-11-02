import React from 'react';
import styled, { css } from 'styled-components';
import { SelectableTile } from '../Shared/Tile';
import { fontSizeSm } from '../Shared/Styles';

const PriceTileStyled = styled(SelectableTile)`
  ${(props) =>
    props.compact &&
    css`
      ${fontSizeSm}
    `}
`;

export default ({ price, index }) => {
  let sym = Object.keys(price)[0];
  let data = price[sym]['USD'];

  return (
    <PriceTileStyled compact={index >= 5}>
      {sym}
      {data.PRICE}
    </PriceTileStyled>
  );
};
