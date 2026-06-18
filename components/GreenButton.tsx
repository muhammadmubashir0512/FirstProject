import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const GreenButton = ({onClick, title}) => {
    return (
        <TouchableOpacity onPress={onClick} style={styles.button}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default GreenButton

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 49,
        borderRadius: 210,
        backgroundColor: '#25D366',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#25D3660F'
    },
    title: {
        fontFamily: 'Urbanist',
        fontWeight: 700,
        fontSize: 14,
        color: 'white'
    }
})