import * as React from 'react';
import {
  Text,View,  StyleSheet,TextInput,TouchableOpacity,Image,
} from 'react-native';
import {Audio} from 'expo-av';

export default class SoundButton extends React.Component{
  constructor(props){
    super(props);
    this.state={
      pressButtonIndex: '', 
    };
  }
  playSound=async soundchunk=>{
    var soundlink='https://s3-whitehatjrcontent.whjr.online/phones/'
    +soundchunk+'.mp3';
    await Audio.Sound.createAsync({
      url: soundlink
    },
    {shouldPlay:true});
  };
  render(){
    return(
               <TouchableOpacity
        style={
          this.props.buttonIndex === this.state.pressButtonIndex
            ? [styles.chunkButton, { backgroundColor: 'white' }]
            : [styles.chunkButton, { backgroundColor: 'red' }]
        }
        onPress={() => {
          this.setState({ pressButtonIndex: this.props.buttonIndex });
          this.playSound(this.props.soundChunk);
        }}>
        <Text
          style={
            this.props.buttonIndex === this.state.pressButtonIndex
              ? [styles.displayText, { color: 'red' }]
              : [styles.displayText, { color: 'white' }]
          }>
          {this.props.wordChunk}
        </Text>
      </TouchableOpacity>
                  )
  }
}

const styles = StyleSheet.create({
  
  chunkButton: {
    width: '60%',
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor:'red',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
  },
});
