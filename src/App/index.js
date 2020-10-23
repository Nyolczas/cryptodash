import React from 'react';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import { AppProvider } from './AppProvider';

class App extends React.Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <h1>Welcome</h1>
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
