import axios from 'axios';

export function getPhotos(){
return (dispatch) =>{
     axios.get('http://localhost:3000/photos')
        .then (res => {
    dispatch({
        type: 'GET_PHOTOS',
        payload:res.data
    });
    });
}; 
}