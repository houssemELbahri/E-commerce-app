import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import {Content, Left, Body, ListItem, Text, Thumbnail} from 'native-base';

var { width } = Dimensions.get("window");

const searchedProducts = props => {
    const { productsFiltered } = props;
    return (
        <Content style={{width: width}}>
            {productsFiltered.length > 0 ? (
                productsFiltered.map((item)=> (
                    <ListItem
                        //onPress={navigation}
                        key={item._id.$oid}
                        avatar
                    >
                        <Left>
                            <Thumbnail 
                                source={{uri: item.image ? 
                                    item.image: "https://static1.squarespace.com/static/5a51022ff43b55247f47ccfc/5a567854f9619a96fd6233bb/5b74446c40ec9afbc633e555/1534346950637/Husqvarna+545FR+%282%29.png?format=1500w"}}
                            />
                        </Left>
                        <Body>
                            <Text>{item.text}</Text>
                            <Text note>{item.description}</Text>
                        </Body>
                    </ListItem>
                ))
            ):(
                <View style={StyleSheet.center}>
                    <Text style={{alignSelf: "center"}}>No Products match the selected criteria </Text>
                </View>
            )}
        </Content>
    )
}


const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default searchedProducts;