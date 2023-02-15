import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import CurrencyList from './pages/CurrencyList';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ marginTop: ""}}>
          <CurrencyList />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
