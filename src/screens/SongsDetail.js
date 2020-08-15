
import React, { useState, useEffect } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';

const SongsDetails = function (props) {
    return (
        <View style={styles.Container}>
            <Text style={styles.headerText}> PLAYING FROM PLAYLIST</Text>
            <Text style={styles.collectionName}>{props.collectionName} </Text>

            <View style={styles.imageConatiner}>
                <Image style={styles.imageStyle}
                       source={{ uri: props.artworkUrl100 }}>
                </Image>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'gray'
    },
    headerText: {
        textAlign: 'center',
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 10
    },
    collectionName: {
        textAlign: 'center',
        fontSize: 14,
        color: 'white'
    },
    imageConatiner:{
        flex:.5,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    imageStyle:{
        resizeMode: "contain",
        height:'50%',
        width:'50%',
        alignItems:'center'
    }

})
export default SongsDetails