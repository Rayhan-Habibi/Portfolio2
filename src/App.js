import logo from './logo.svg';
import './App.css';
import AsidePage from './component/Aside/AsidePage';
import { Icon } from '@iconify/react';
import Container from './component/DescPage/Container';
import Background from './Assets/Image/Blurry Background-min.jpg'
import { useState } from 'react';
import ContextScroll from './component/Context/ContextScroll';



function App() {

  const screenRes = window.innerWidth;
  if (screenRes < 768){
    return(
      <div className="">
        <AsidePage />
        <Container />
      </div>
    )
  } else {
    return (
        <div className='grid grid-cols-2 h-screen z-2'>
          <AsidePage/>
          <Container />
        </div>
    );
  }
}

export default App;
