import React from 'react';
import styled from 'styled-components';

const HeaderBox = styled.div`
  width:100%;
  height:10vh;
  background:#333;
`

const Header=({children})=> {
    return (
		<HeaderBox>
			<h1>헤더입니다.</h1>
		</HeaderBox>
    );
}

export default Header;
