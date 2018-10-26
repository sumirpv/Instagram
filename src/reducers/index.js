import {combineReducers} from'redux';
import PhotosReducer from './photo-reducers'

const rootReducer = combineReducers({
    photos: PhotosReducer
})

export default rootReducer;