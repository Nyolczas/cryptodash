import React from 'react';
import styled, { css } from 'styled-components';
import { SelectableTile } from '../Shared/Tile';
import { fontSizeSm, fontSizeLg } from '../Shared/Styles';

const PriceTileStyled = styled(SelectableTile)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  ${(props) =>
    props.compact &&
    css`
      ${fontSizeSm}
    `}
`;

const JustifyRight = styled.div`
  justify-self: right;
`;

const ChangePct = styled.div`
  color: ${(props) => (props.pct > 0 ? 'greenYellow' : 'red')};
`;

const TickerPrice = styled.div`
  grid-column: 1 / span 2;
  ${fontSizeLg}
`;

const numberFormat = (number) => {
  return number.toFixed(2);
};

const PriceTile = ({ sym, data }) => {
  return (
    <PriceTileStyled>
      <div> {sym} </div>
      <JustifyRight>
        <ChangePct pct={data.CHANGEPCT24HOUR}>
          {numberFormat(data.CHANGEPCT24HOUR)}
        </ChangePct>
      </JustifyRight>
      <TickerPrice> $ {numberFormat(data.PRICE)} </TickerPrice>
    </PriceTileStyled>
  );
};

export default ({ price, index }) => {
  let sym = Object.keys(price)[0];
  let data = price[sym]['USD'];
  return <PriceTile sym={sym} data={data}></PriceTile>;
};
