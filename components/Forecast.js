import React from 'react'
import { Text, View , StyleSheet } from 'react-native'
export default function Forecast(props){
    return (
        <View style={style.backdrop}>
            <Text>{props.main}</Text>
            <Text>{props.description}</Text>
            <Text>{props.temp}°C</Text>
        </View>
    )
}

const style = StyleSheet.create({
    backdrop: {
        fontSize: 20000
    }
})
