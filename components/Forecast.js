import React from 'react'
import { Text, View , StyleSheet } from 'react-native'
export default function Forecast(props){
    return (
        <View style={style.container}>
            <Text style={style.item}>{props.main}</Text>
            <Text style={style.item}>{props.description}</Text>
            <Text style={style.item}>{props.temp}°C</Text>
            <Text style={style.item}>Humidity: {props.humidity}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    item: {
        padding: 4,
        fontSize: 24
    },
})
