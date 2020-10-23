import React from 'react';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';

class App extends React.Component {
  render() {
    return (
      <AppLayout>
        <AppBar />
        <h1>Welcome</h1>
      </AppLayout>
    );
  }
}

export default App;
