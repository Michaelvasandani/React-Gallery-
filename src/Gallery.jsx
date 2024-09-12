
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



const Gallery = () => {
  return (
    <div>
    <nav id="desktop-nav">
       <NavBar />
     </nav>
      <Heading style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>Art Institute of Chicago Gallery</Heading>
      <UploadFeature />
      <RandomPhoto />
    </div>
  )
}

export default Gallery
