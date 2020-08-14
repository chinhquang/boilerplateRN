/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, 
  Dimensions,
  Image,
  TouchableOpacity
  
} from 'react-native';
import {ColorThemeContext} from "../../Context/ColorThemeProvider"
import {styles} from "../ExampleScreen/ExampleStype"
import { widthRatio } from '../../Constant';
export default function  ExampleScreen ({navigation}){
    const {colors, setColors} = React.useContext(ColorThemeContext);
    let icon = require('../../image/icon.png')
    return (
        <>
    <StatusBar barStyle={colors.statusBar} />
    
    <View style={{...styles.container, backgroundColor : colors.backgroundColor}}>
        <View style={{width : '40%', aspectRatio:1, marginVertical: 10 * widthRatio}}>
            <Image source={icon} style={{flex :1,resizeMode : 'contain',
                alignSelf : 'center'}}/>
        </View>
        
        <Text style ={{...styles.largeText, color: colors.textPrimary}}>This is the example of this boilerplate code</Text>
        <Text style ={{...styles.lightText, color : 'gray'}}>This is the example of this boilerplate code</Text>
    </View>
        
        
        
    </>
    );
    
  
};



