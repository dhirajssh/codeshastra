import React, { useState } from 'react'
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Header from '../components/Navbar';
import Product from '../components/Products';
import cocktail from '../images/coconut.svg';

function HomeScreen() {

  const [keyword, setKeyword] = useState('');

  return (
    <div>
      <Landing>
        <Header/>
        <Text>Lost something? Don't worry!<br/>Sit back and have a cocktail while we help you find it.</Text>
        <FindButton>Find</FindButton>
        <ReportButton>Report</ReportButton>
        <img src = {cocktail} style={{ position: 'absolute', right: '10vw', top: '25vh' }}></img>
      </Landing>
      <h1>Recently Reported</h1>
      <Product/>
    </div>
  )
}

export default HomeScreen;

const Landing = styled.div `
  max-width: 100vw;
  height: 100vh;
  background: linear-gradient(115.12deg, #7209B7 0%, #ECAC09 100%);
`;

const Text = styled.p `
  font-size: 2rem;
  width: 50vw;
  margin: 25vh 0 0 7vw;
`;

const FindButton = styled(Button) `
  margin: 5vh 2vw 0 7vw;
  width: 120px;
  border-radius: 0;
`;

const ReportButton = styled(Button) `
  margin-top: 5vh;
  width: 120px;
  border-radius: 0;
`;