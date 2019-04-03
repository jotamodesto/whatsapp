import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import './app.css';
import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
            <Sidebar />
            <Chat />
        </div>
      </Provider>
    );
  }
}

export default App;
