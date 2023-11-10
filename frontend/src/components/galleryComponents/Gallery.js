import React, { useEffect, useState } from "react";
import { Loading } from "../Loading";


export const Gallery = () => {

    const FLICKR_API_KEY = process.env.REACT_APP_FLICKR_API_KEY
    const FLICKR_ALBUM_ID = process.env.REACT_APP_FLICKR_ALBUM_ID
    const [photos, setPhotos] = useState(['Loading']);
  
    useEffect(() => {
      const apiKey = FLICKR_API_KEY;
      const photosetId = FLICKR_ALBUM_ID;
  
      const fetchPhotos = async () => {
        try {
          const response = await fetch(
            `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${apiKey}&photoset_id=${photosetId}&format=json&nojsoncallback=1`
          );
  
          if (!response.ok) {
            throw new Error('Failed to fetch photos');
          }
  
          const data = await response.json();
          const photoList = data.photoset.photo.map((photo) => ({
            id: photo.id,
            title: photo.title,
            url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
          }));
  
          setPhotos(photoList);
        } catch (error) {
          console.error('Error fetching photos:', error);
        }
      };
  
      fetchPhotos();
    }, []);

    const loadedDisplay = (
        
        <ul className="gallery-container">
            {photos.map((photo) => (
            <li className="gallery-image-container" key={photo.id}>
                <img src={photo.url} alt={photo.title} />
            </li>
            ))}
        </ul>
    )

    return (
        <div className="gallery">
            <h2 className="title">OUR PROJECTS</h2>
            {(photos === 'Loading') ? <Loading />: loadedDisplay}
        </div>
    )
}
