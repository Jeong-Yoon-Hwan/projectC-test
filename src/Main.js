import React from 'react';
import {Link} from "react-router-dom";
const Main = (props) => {
	return (
		<>
			<h3>안녕하세요. 메인페이지 입니다.</h3>
      <Link to = "/main2">메인2</Link>
		</>
	);
};

export default Main;
