import React, { Component } from 'react';
import {  ScrollView } from 'react-native';
import PhotoSection from './photo-section';
import {connect} from 'react-redux';
import { getPhotos} from '../actions';

class PhotoFeed extends Component {
    componentDidMount(){
        this.props.getPhotos();
    }

    renderPhoto(){
        return this.props.photos.map((myPhoto, id) =>{
            return(
                <PhotoSection  key ={id} photo ={myPhoto} />
            );
        })
    }
  render() {
    return (
      <ScrollView Horizontal = { true }>
      {this.renderPhoto()}
      </ScrollView>
    );
  }
}
function mapStateToProps(state){
    return {
        photos: state.photos
    }
}

export default connect(mapStateToProps,  {getPhotos})(PhotoFeed);