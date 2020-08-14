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
export default function  ExampleScreen ({navigation}){
    const {colors, setColors} = React.useContext(ColorThemeContext);
    console.log(colors)
    return (
        <>
    <StatusBar barStyle={colors.statusBar} />
    
    <View style={{...styles.container, backgroundColor : colors.backgroundColor}}>
        <Text style ={{...styles.largeText, color: colors.textPrimary}}>This is the example of this boilerplate code</Text>
        <Text style ={{...styles.lightText, color : 'gray'}}>This is the example of this boilerplate code</Text>
    </View>
        
        
        
    </>
    );
    
  
};



