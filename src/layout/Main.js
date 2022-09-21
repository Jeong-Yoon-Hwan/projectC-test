import React from 'react';
import {Link} from "react-router-dom";
import Header from '../components/Header.js';
import styled from 'styled-components';

const MainBox = styled.div`
  width:calc(100vw - 400px); 
  height:100vh; 
`;

const ContentBox = styled.div`
  width:inherit;
  height:90vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background:beige;
`

const Main = (props) => {
	return (
		<MainBox>
      <Header></Header>
			<ContentBox>
        <h3>메인페이지</h3>
      </ContentBox>
		</MainBox>
	);
};

export default Main;
