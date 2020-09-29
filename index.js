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
import styles from './styles/style';

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
        <Image style={{
                    width: 300,
                    height: 200,
                    transform: [{translate: [0,0,]}, {rotateY: 0}]
                }} source={asset('title.png')} />
        
    </View>
    );
  }
};



const immersionSection = () => (
  <View style={{
    transform: [
      {translate: [1,0.5,-1]},
      {rotateY: -45},
      {scale: 3}
    ]
  }}>
    <Text>Immersion</Text>
  </View>
)

const postHumanism = () => (
  <View style={{
    transform: [
      {translate: [1,0.5,1]},
      {rotateY: -125},
      {scale: 3}
    ]
  }}>
    <Text>Post-Humanism</Text>
  </View>
)

const selfAutomation = () => (
  <View style={{
    transform: [
      {translate: [-1.5,0.5,1.2]},
      {rotateY: -225},
      {scale: 3}
    ]
  }}>
    <Text>Self-Automation</Text>
  </View>
)

AppRegistry.registerComponent('postHumanism', () => postHumanism);
AppRegistry.registerComponent('selfAutomation', () => selfAutomation);
AppRegistry.registerComponent('immersionSection', () => immersionSection);
AppRegistry.registerComponent('map', () => map);