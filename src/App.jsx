
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import axios from 'axios';
import RandomPhoto from './RandomPhoto';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Heading } from '@chakra-ui/react'
import UploadFeature from './uploadFeature'; // Update the import here
import NavBar from './NavBar';
import "./RandomPhoto.css";
import Home from './Home';
import Gallery from './Gallery';
import Contact from './Contact';
function App() {






 return (
   <>
     <div>
       <BrowserRouter>
         <Routes>
           <Route index element={<Home />} />
           <Route path="/home" element={<Home />} />
           <Route path="/gallery" element={<Gallery />} />
           <Route path ="/contact" element={<Contact />} />
         </Routes>
       </BrowserRouter>
  
     </div>


   </>
 )
}


export default App