import React, { Component } from 'react';
import { View, Text, Image,  TouchableWithoutFeedback } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default class PhotoSection extends Component {
    
    constructor(){
        super();
        this.likes= false;
        this.state = { ionIcon :'ios-heart-outline'}
    }
    togleLike(){
        this.likes =!this.likes;
        if( this.likes){
            this.setState({ ionIcon :'ios-heart'});
        }else{
            this.setState({ ionIcon : 'ios-heart-outline'});
        }
    }
  render() {
    return (
      <View style= {styles.container}>
          <View style ={styles.thumbNailSection}>
             <Image style= {styles.thumbNail}
             source={{uri:this.props.photo.user_avatar}}/>
             <View style = { styles.userContainer}>
             <Text  style ={styles.userName }>
             {this.props.photo.username}
             </Text> 
             </View>
          </View>
          <View>
              <Image style= {{width:null, height:200}}
              source={{uri:this.props.photo.image}}/>
          </View>
          <View style ={ styles.heartContainer}>
              
              <TouchableWithoutFeedback  onPress ={ this.togleLike.bind(this)}>
              <IonIcon
              name={this.state.ionIcon}
              size={30}
              style={{color : this.state.ionIcon === 'ios-heart'? 'red' : 'black'}} />
              </TouchableWithoutFeedback>
          </View>
          <View style= { styles.imageMeta}>
              <Text style ={styles.userName }>User Name</Text>
              <Text>{this.props.photo.caption}</Text>
          </View>
      </View>
    );
  }
}
const styles ={
    container :{
        margin: 10,
    },
    thumbNailSection:{
        flexDirection: 'row',
        padding: 5,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    thumbNail:{
        width: 50, 
        height : 50, 
        borderRadius: 25,
    },
    userContainer:{
        justifyContent: 'center',
        padding:5,
    },
    imageMeta:{
        flexDirection: 'row',
    },
    userName:{
        fontWeight: 'bold',
        paddingRight: 5,
    },
    heartContainer:{
        paddingTop: 10,
        paddingBottom: 10,
    }
}