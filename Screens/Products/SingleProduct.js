import React, { useState, useEffect } from 'react'
import { View, Image, StyleSheet, Text, ScrollView, Button } from 'react-native';
import { Left, Right, Container, H1 } from 'native-base';

const SingleProduct = (props) => {
    const [item, setItem] = useState(props.route.params.item);
    const [availability, setAvailability] = useState(null);

    return (
        <Container style={styles.container}>
            <ScrollView style={{marginBottom: 80, padding: 5}}>
                <View>
                    <Image source={{
                              uri:item.image ? item.image
                              : "https://static1.squarespace.com/static/5a51022ff43b55247f47ccfc/5a567854f9619a96fd6233bb/5b74446c40ec9afbc633e555/1534346950637/Husqvarna+545FR+%282%29.png?format=1500w"
                            }}
                            resizeMode="contain"
                            style={styles.image}
                    />
                </View>
                <View style={styles.contentContainer}>
                    <H1 style={styles.contentHeader}>{item.name}</H1>               
                    <Text style={styles.contentText}>{item.brand}</Text>
                </View>
                {/**TODO rich description and availibility */}
            </ScrollView>

            <View style={styles.bottomContainer}>
                 <Left>
                     <Text style={styles.price}>$ {item.price}</Text>
                 </Left>
                 <Right>
                     <Button title="Add" />
                 </Right>
            </View>
        </Container>
    )
}


const styles = StyleSheet.create({
    container: {
        position: relative,
        height: '100%',
    },
    imageContainer: {
        backgroundColor: 'white',
        padding: 0,
        margin: 0,
    },
    image: {
        width: "100%",
        height: 250,
    },
    contentContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentHeader: {
        fontWeight: 'bold',
        marginBottom: 20,
    },
    contentText: {
        fontSize: 18,
        fontWeight:'bold',
        marginBottom: 20,
    },
    bottomContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'white'
    },
    price: {
        fontSize: 24,
        margin: 20,
        color: 'red',
    },
});


export default SingleProduct;


