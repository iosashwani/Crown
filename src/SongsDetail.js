
import React, { Component, useState, useEffect } from 'react';
import {
    View,
    Image,
    Text,
    FlatList,
} from 'react-native';

const SongsDetails = () => {

    return (
        <View style={{ backgroundColor: '#464646', flex: 1 }}>
            <Text style={{ textAlign: 'center', fontSize: 14, color: 'white' }}> PLAYING FROM PLAYLIST</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'white', textAlign: 'center' }}> I Want You Back</Text>

            <View style={{ alignItems: 'center', justifyContent: 'center', flex: .5 }}>
                <Image style={{ backgroundColor: 'red', resizeMode: "contain" }}>
                </Image>
            </View>

        </View>
    )


}

export default SongsDetails