import {StyleSheet} from 'react-native'
import {width, widthRatio} from "../../Constant"

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection : 'column',
        alignItems : "center",
        justifyContent : "center",

    },
    largeText: {
        fontWeight : 'bold',
        width: '70%',
        fontSize : 20 * widthRatio,
        textAlign : 'center'
    },
    lightText : {
        marginTop : 10 * widthRatio,
        fontWeight: 'normal',
        width: '70%',
        fontSize : 13 * widthRatio,
        textAlign : 'center',

    },
    iconContainer : {width : '40%', aspectRatio:1, marginVertical: 10 * widthRatio},
    icon: {flex :1,resizeMode : 'contain',alignSelf : 'center'},
});