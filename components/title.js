import React from 'react';
import {View, Image, asset} from 'react-360';

export default class Title extends React.Component {
    render() {
        return (
            <View>
                <Image style={{
                    width: 300,
                    height: 150
                }} source={asset('title.svg')} />
            </View>
        )
    }
}