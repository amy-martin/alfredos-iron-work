
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchGalleryPhotos = createAsyncThunk('gallery/retrieveGalleryPhotos', async(payload, thunkAPI) => {
    try {
        const apiKey = process.env.REACT_APP_FLICKR_API_KEY;

        const photosetId = process.env.REACT_APP_FLICKR_ALBUM_ID;

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

        return photoList;
    } catch (error) {
        console.error('Error fetching photos:', error);
        throw error
    }
})


const gallerySlice = createSlice ({
    name: 'gallery',
    initialState: {
        status: 'idle',
        error: null,
        galleryPhotos: []
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGalleryPhotos.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchGalleryPhotos.fulfilled, (state, action) => {
                state.status = 'fulfilled'
                state.galleryPhotos = action.payload
            })
            .addCase(fetchGalleryPhotos.rejected, (state) => {
                state.status = 'failed'
            })
    }
});


export const selectGalleryState = state => state.gallery
export default gallerySlice.reducer