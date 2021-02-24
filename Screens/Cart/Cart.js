import { View } from 'native-base';
import React from 'react'
import { View, Text } from 'react-native'

import { connect } from 'react-redux';


const Cart = (props) => {
    return (
        <View style={{flex: 1}}>
            {props.cartItems.map(x => {
                return (
                    <Text>{x.product.name}</Text>
                )
            })}
        </View>
    )
}


const mapStateToProps = (state) => {
    const { cartItems } = state;
    return {
        cartItems: cartItems,    
    }
}
export default connect(mapStateToProps,null)(Cart);