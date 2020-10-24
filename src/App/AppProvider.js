import React from 'react';

const cc = require('cryptocompare');

export const AppContext = React.createContext();

const MAX_FAVORITES = 10;
export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Dashboard',
      favorites: ['BTC', 'ETH', 'XMR', 'DOGE'],
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites,
    };
  }

  componentDidMount = () => {
    this.fetchCoins();
  };

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({ coinList });
  };

  addCoin = (key) => {
    let favorites = [...this.state.favorites];
    if (favorites.length < MAX_FAVORITES) {
      favorites.push(key);
      this.setState({ favorites: favorites });
    }
  };

  confirmFavorites = () => {
    this.setState({ firstVisit: false, page: 'Dashboard' });
    localStorage.setItem('cryptoDash', JSON.stringify({ test: 'hello' }));
  };

  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    if (!cryptoDashData) {
      return { page: 'Settings', firstVisit: true };
    }
    return {};
  }
  setPage = (page) => this.setState({ page });

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
