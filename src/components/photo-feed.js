import React, { Component } from 'react';
import {  ScrollView } from 'react-native';
import axios from 'axios';
import PhotoSection from './photo-section'
export default class PhotoFeed extends Component {
    state = { photos: ['']};
    componentDidMount(){
        axios.get('http://localhost:3000/photos')
        .then (res => {
          this.setState({ photos:res.data})
          });
    }

    getPhoto(){
        return this.state.photos.map((myPhoto, id) =>{
            return(
                <PhotoSection  key ={id} photo ={myPhoto} />
            );
        })
    }
  render() {
    return (
      <ScrollView Horizontal = { true }>
      {this.getPhoto()}
      </ScrollView>
    );
  }
}
