import React from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from './AppProvider';

const Logo = styled.div`
  font-size: 1.5em;
  margin-bottom: 1rem;
`;
const Bar = styled.div`
  @media (min-width: 440px) {
    display: grid;
    grid-template-columns: 155px auto 100px 100px;
  }
  margin-bottom: 3rem;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  margin-bottom: 0.5rem;
  ${(props) =>
    props.active &&
    css`
      color: dodgerblue;
    `}
  ${(props) =>
    props.hidden &&
    css`
      display: none;
    `}
`;

const ControlButton = ({ name }) => {
  return (
    <AppContext.Consumer>
      {({ firstVisit, page, setPage }) => (
        <ControlButtonElem
          active={page === name}
          onClick={() => setPage(name)}
          hidden={firstVisit && name === 'dashboard'}>
          {name}
        </ControlButtonElem>
      )}
    </AppContext.Consumer>
  );
};
export default function () {
  return (
    <Bar>
      <Logo> CryptoDash</Logo>
      <div></div>
      <ControlButton active name='Dashboard' />
      <ControlButton name='Settings' />
    </Bar>
  );
}
