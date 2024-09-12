import React, { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  deleteObject,
} from "firebase/storage";
import { storage } from "./firebase"; // Adjust this import based on your Firebase config file
import { v4 } from "uuid";
import "./uploadFeature.css"; // Make sure this CSS file contains the button styles

const UploadFeature = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "images/");

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, { url, ref: snapshot.ref }]); // Save URL and reference
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, { url, ref: item }]); // Save URL and reference
        });
      });
    });
  }, []);

  const deleteImage = (imageRef) => {
    deleteObject(imageRef).then(() => {
      setImageUrls((prev) => prev.filter((image) => image.ref !== imageRef));
    }).catch((error) => {
      console.error("Error deleting image: ", error);
    });
  };

  return (
    <div className="uploadImage">
      <div className="buttonContainer"> 
        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <button className="uploadButton" onClick={uploadFile}>Upload Image</button>
      </div>
      
     
      <div className="imageGrid">
        {imageUrls.map((image, index) => (
          <div key={index} className="imageItem">
            <img src={image.url} alt="Uploaded" />
            <button className="removeButton" onClick={() => deleteImage(image.ref)}>Remove Image</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadFeature;
