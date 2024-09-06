import { useState } from 'react';
import { useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Heading from './Heading';
import axios from 'axios';
import RandomPhoto from './RandomPhoto';
import InfiniteScroll from 'react-infinite-scroll-component';
function App() {



  return (
    <>
      <div>
        <h1>hi</h1>
        <Heading />
        <RandomPhoto />
      </div>

    </>
  )
}

export default App
