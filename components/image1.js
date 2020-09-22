import React from 'react';
import {View, Image, asset} from 'react-360';

export default class Image1 extends React.Component {
    render() {
        return (
            <View style={{
                width: 500,
                transform: [
                    {translate: [-350, 200, -500]}
                ]
            }}>
                <Image style={{
                    width: 600,
                    height: 400
                    
                }} source={asset('mindmap-0.jpeg')}/>
            </View>
        )
    }
}

