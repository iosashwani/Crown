import React, {useState, useEffect } from 'react';
import {
    View,
    Image,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import NetworkManager from '../network/NetworkManager'
import { Actions } from 'react-native-router-flux';

const Songs = function () {

    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      fetchData()
    }, []);

    fetchData = () => {
        setLoading(true)
        NetworkManager.networkRequest(
            'https://itunes.apple.com/search?term=Michael+jackson',
            callBackSuccess,
            callBackFailure,
        );
    }  

    callBackSuccess = response => {
        if (response) {
            setResult(response.results)
            setLoading(false)
        }
    };

    callBackFailure = response => {
        Alert.alert("Something went Wrong")
    };
    detailScreen = (item) => {
        Actions.detail({collectionName:item.collectionName,artworkUrl100:item.artworkUrl100})
    }

    renderRow = ({ index, item }) => {
        return (
            <TouchableOpacity onPress={() => detailScreen(item)}>
                <View style={styles.rowContainer}>
                    <View style={styles.imageView}>
                        <Image style={styles.image}
                            source={{ uri: item.artworkUrl60 }}>
                        </Image>
                    </View>
                    <View style={styles.mainTextContainerView}>
                        <Text style={styles.headerText}>
                            {item.collectionName}
                        </Text>
                        <Text style={styles.artistText}>
                            {item.artistName}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
   
    return (
        <View style={styles.Container}>
            <FlatList
                data={result}
                renderItem={renderRow}
                onRefresh={()=> fetchData()}
                refreshing={loading}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'gray'
    },
    rowContainer: {
        margin: 5,
        flexDirection: 'row'
    },
    imageView: {
        margin: 10
    },
    image: {
        resizeMode: "cover",
        height: 50,
        width: 50
    },
    mainTextContainerView: {
        marginTop: 10,
        marginTop: 10,
        marginRight: 20
    },
    headerText: {
        marginLeft: 10, 
        color: 'white', 
        fontWeight: 'bold'
    },
    artistText:{
         marginLeft: 10,
         color:'white',
         fontWeight:'bold'
    }
})
export default Songs