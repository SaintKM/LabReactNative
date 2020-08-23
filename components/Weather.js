import React, { useState, useEffect } from 'react'
import Forecast from './Forecast'
import { ImageBackground, StyleSheet, Text, View} from 'react-native'

export default function Weather(props){
    const [forecastInfo, setForecastInfo] = useState({
        name: 'loading',
        main: 'loading',
        description: 'loading',
        temp: 0,
        humidity: 0,
    })
    const apiKey = '51e68f533661713308e61b15fe0d5054'
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=${apiKey}`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        name: json.name,
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        humidity: json.main.humidity
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])

    return (
        <ImageBackground source={require('../mahjong_soul_bg.jpg')} style={styles.backdrop}>
            <View style={styles.container}>
                <Text style={styles.text}>Zip Code {props.zipCode}</Text>
                <Forecast {...forecastInfo} style={styles.fontstyle}/>
            </View>
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    text: {
        paddingTop: 10,
        fontSize: 24,
        textShadowColor: 'white',
        textShadowOffset: { width: 0, height: 0},
        textShadowRadius: 2,
    },
})