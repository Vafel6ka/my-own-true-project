import React from 'react';
import './main.css'
import LeftBox from '../leftBox/leftBox'
import RightBox from '../rightBox/rightBox'

function Main() {
  return (
    <div className="header-wrapper">
        <div className="col1">
            <LeftBox />
        </div>
        
        <div className="col2">
            <RightBox />
        </div>        
    </div>
  );
}

export default Main;
