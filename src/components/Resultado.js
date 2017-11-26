import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');

export default class Resultado extends Component {
    render() {
        return (
            <View style={styles.resultado } >
                <Image source={cara} />
                <Image source={coroa} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    resultado : {
        flex: 1,
        backgroundColor : '#61bd8c',
        justifyContent : 'center',
        alignItems : 'center',
    }
});
