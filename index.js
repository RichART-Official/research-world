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
                    width:2,
                    height: 1,
                    transform: [{translate: [-2,0,-5]}, {rotateY: 0}]
                }} source={asset('title.png')} />
        
    </View>
    );
  }
};



const immersionSection = () => (
  <View>
  <Image 
        style={{
          width: 3,
          height: 1.5,
          transform: [
            {translate: [0,0,-1]}
          ]
        }} 
        source={asset('immersion/1.png')}
    />
  <Text style={{
    transform: [
      {translate: [1,2,0.5]},
      {rotateY: -45},
      {scale: 5}
    ]
  }}>
    Immersion
    
  </Text>
  </View>
)

const immersionImagery = () => (
  <View style={{
    transform: [
      {translate: [1,0.5,-2]},
      {rotateY: -45},
      {scale: 3}
    ]
  }}>
    <Image 
        style={{
          width: 2,
          height: 1,
          transform: [
            {translate: [0,0,-1]}
          ]
        }} 
        source={asset('immersion/1.png')}
      />
      <Text style={{
        transform: [
          {translate: [1,0,-2]},
          {scale:2},
          {rotateY: 45}
        ]
      }}>Immersion</Text>
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
     <Image 
        style={{
          width: 4,
          height: 2,
          transform: [
            {translate: [0,1,-2]}
          ]
        }} 
        source={asset('post-humanism/1.png')}
      />
    <Image 
        style={{
          width: 5,
          height: 2,
          transform: [
            {translate: [0,1,-1]}
          ]
        }} 
        source={asset('post-humanism/2.png')}
      />
    <Text
    style={{
      transform: [
        {translate: [0,0,-1]}
      ]
    }} 
    >Post-Humanism</Text>
  </View>
)

const selfAutomation = () => (
  <View>
    <Text style={{
      transform: [
        {translate: [0,1,3]},
        {rotateY: -180},
        {scale: 3}
      ]
    }}>
      Self-Automation
    </Text> 
    <Image 
        style={{
          width: 3,
          height: 2,
          transform: [
            {translate: [-2,1,3]},
            {rotateY: -180},
          ]
        }} 
        source={asset('self-automation/1.png')}
      />
      
    
  </View>
  
)

AppRegistry.registerComponent('postHumanism', () => postHumanism);
AppRegistry.registerComponent('selfAutomation', () => selfAutomation);
AppRegistry.registerComponent('immersionImagery', () => immersionImagery);
AppRegistry.registerComponent('immersionSection', () => immersionImagery);
AppRegistry.registerComponent('map', () => map);