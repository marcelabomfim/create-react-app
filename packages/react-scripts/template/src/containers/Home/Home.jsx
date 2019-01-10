import React, { Component } from 'react';

import logo from '../../assets/logo.svg';
import Link from '../../components/Link';

import StyledContainer, { Logo, Header } from './Home.styles';

export default class extends Component {
  render() {
    return (
      <StyledContainer>
        <Header>
          <Logo src={logo} alt="logo" />
          <p>
            Hello from Marcela Bomfim!
          </p>
          <hr />
          <p>
            Edit <code>src/containers/Home/Home.jsx</code> and save to reload.
          </p>
          <Link href="https://reactjs.org" label="Learn React" />
        </Header>
      </StyledContainer>
    );
  }
}
