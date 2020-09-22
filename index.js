import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Surface,
  asset
} from 'react-360';
import Title from './components/title';

const ImageContainer = ({transform, src, width, height}) => (
  <View style={{
    width: width || 500,
    transform: transform
  }}>
    <Image style={{
        width: width || 500,
        height: height || 350
        
    }} source={asset(src)}/>
  </View>
)

export default class map extends React.Component {
  render() {    
    return (
      <View>
        
        <ImageContainer src="mindmap-0.jpeg" width={400} height={275} transform={[{translate: [200, 200, -20]}, {scale: 1.66}, {rotateZ: 20}, {rotateY: -80}]}/>
        <ImageContainer src="mindmap-2.jpeg" width={400} height={275} transform={[{translate: [-50,475, 400]}, {scale: 1.33}, {rotateY: -140}]}/>
        <ImageContainer src="mindmap-1.jpeg" transform={[{translate: [-500, 800, 300]}, {rotateY: 150}]} /> 
        <Image style={{
                    width: 300,
                    height: 200,
                    transform: [{translate: [-150,1000,-170]}, {rotateY: 0}]
                }} source={asset('title.png')} />
        
    </View>
    );
  }
};

const styles = StyleSheet.create({
  front: {
    transform: [
      {rotateX: 30}
    ]
  },  
  back: {

  },  
  panel: {
    width: 20,
    height: 1000,
    backgroundColor: 'green',
  },
  panel1: {
    width: 200,
    height: 400,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 600,
    width: 1000,
  },
  image1: {
    height: 600,
    width: 1000,
    transform: [{translateZ: 600}]
  },
  image2: {
    height: 600,
    width: 1000
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('map', () => map);