import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import { fontSizeLg, clrHigh, hoverHigh } from '../Shared/Styles';

const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: ${clrHigh};
  cursor: pointer;
  ${fontSizeLg};
  &:hover {
    color: ${hoverHigh};
  }
`;

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default () => {
  return (
    <AppContext.Consumer>
      {({ confirmFavorites }) => (
        <CenterDiv>
          <ConfirmButtonStyled onClick={confirmFavorites}>
            Confirm Favorites
          </ConfirmButtonStyled>
        </CenterDiv>
      )}
    </AppContext.Consumer>
  );
};
