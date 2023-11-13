import React, { useEffect, useState } from "react";
import { Loading } from "../Loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchGalleryPhotos, selectGalleryState } from "../../slices/gallerySlice";


export const Gallery = () => {
    const galleryState = useSelector(selectGalleryState);
    const photos = galleryState.galleryPhotos
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(fetchGalleryPhotos())
    }, [dispatch]);

    if (galleryState.status === 'loading') {
      return <Loading />
    } else if (galleryState.status === 'fulfilled') {
      return (
        <div className="gallery">
            <h2 className="title">OUR PROJECTS</h2>
            <ul className="gallery-container">
            {photos.map((photo) => (
            <li className="gallery-image-container" key={photo.id}>
                <img src={photo.url} alt={photo.title} />
            </li>
            ))}
        </ul>
        </div>
    )
    }


}
