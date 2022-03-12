import React from 'react'
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native'
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width /4, //dividir em 4 colunas
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#F7F7F7',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
        color: '#2C3333'
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#1C658C',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    },
});

export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble);
    if (props.triple) stylesButton.push(styles.buttonTriple);
    if (props.operation) stylesButton.push(styles.operationButton);
    return(
        <TouchableHighlight onPress= {() => props.onClick(props.label)}>
            <Text style = {stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}