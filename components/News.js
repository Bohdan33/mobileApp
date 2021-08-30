import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { Style } from '../styles/style';

export default function News({ route }) {
    return (
        <View style={Style.main}>
            <Image style={Style.image} source={{ uri: route.params.img }} />
            <Text style={Style.location}>{route.params.name}</Text>
            <Text style={Style.anons}  >{route.params.text}</Text>

        </View>
    );
}
