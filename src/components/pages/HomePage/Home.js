import React from 'react';
import SubHeader from '../SubHeader';
import {homeObjOne} from './Data';
import Services from '../Services';

const Home = ()=>{
  return (
    <div>
        <SubHeader {...homeObjOne}/>
        <Services/>
    </div>
   
  )
}


export default Home;
