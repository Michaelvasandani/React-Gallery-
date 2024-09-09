import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import "./RandomPhoto.css";


const RandomPhoto = () => {
   const [images, setImages] = useState([]); // State to store the images
   const [page, setPage] = useState(1); // State to store the page number
   const [hasMore, setHasMore] = useState(true); // State to store whether there are more images to fetch




   const fetchPhoto = async () => {
           try {
               const response = await axios.get("https://api.artic.edu/api/v1/artworks", {
                   params: {
                       page: page, // get a random page
                       limit: 25,
                       fields: 'id,title,image_id'
                   }
               });
               console.log(response.data.data);
               const artworks = response.data.data.map((artwork) => ({
                   id: artwork.id,
                   title: artwork.title,
                   imageUrl: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
               }));
               setImages((prevImages) => [...prevImages, ...artworks]);// Save the fetched data into the state
               if (response.data.pagination.total_pages <= page) {
                   setHasMore(false); // No more data
                   setLoading(false);


               } else {
                   setPage((prevPage) => prevPage + 1); // Increment the page
               }
           } catch (error) {
               console.error('Error fetching photos:', error);
           }
       };
      
   useEffect(() => {
       fetchPhoto();
   },[]);


   return (
       <div>
           <InfiniteScroll
               dataLength={images.length} // This is required to track the scroll position
               next={fetchPhoto} // Function to load more data
               hasMore={hasMore} // Boolean to know if there are more data to load
           >
                <div className='images'>
                   {images.map((image) => (
                       <div key={image.id} className='image-item'>
                           <img src={image.imageUrl} alt={image.title} className='image' />
                       </div>
                   ))}
               </div>
           </InfiniteScroll>
       </div>
   );
};


export default RandomPhoto;
