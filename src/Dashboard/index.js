import React from 'react';
import Page from '../Shared/Page';
import PriceGrid from './PriceGrid';
import CoinSpotlight from './CoinSpotlight';
import styled from 'styled-components';

const ChartGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 3fr;
`;

export default () => {
  return (
    <Page name='Dashboard'>
      <PriceGrid />
      <ChartGrid>
        <CoinSpotlight />
        <div>Chart goes here</div>
      </ChartGrid>
    </Page>
  );
};
