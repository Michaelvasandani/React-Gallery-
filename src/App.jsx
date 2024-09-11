
import { useState } from 'react';
import { useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import axios from 'axios';
import RandomPhoto from './RandomPhoto';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Heading } from '@chakra-ui/react'
import UploadFeature from './uploadFeature'; // Update the import here
import "./RandomPhoto.css";
function App() {






 return (
   <>
     <div>
       <Heading style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>Art Institute of Chicago Gallery</Heading>
       <UploadFeature />
       <RandomPhoto />
     </div>


   </>
 )
}


export default App