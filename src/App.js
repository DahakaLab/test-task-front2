import React, { Component } from 'react';
import Header from "./components/header/header";
import Container from "./components/container/container";
import Footer from "./components/footer/footer";

export default class App extends Component {
  render() {
    return (
      <main className="main_container">
          <Header/>
          <Container/>
          {/*<Footer/>*/}
      </main>
    );
  }
}

