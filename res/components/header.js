import React from 'react';
import {Text,View} from 'react-native';
import PropTypes from 'prop-types'

 
// init component
const Header = (props) =>{
    const { viewStyle,textStyle } = headerStyle;
    return(
        <View style={viewStyle}> 
            <Text style={textStyle}>{props.children}</Text>
        </View>
        );
    };
 
// style
const headerStyle =  {
    viewStyle:{
        backgroundColor: '#0061da',
        justifyContent :'center',
        alignItems:'center',
        height:60,
        shadowColor:'#000000',
        shadowOffset:{width:0 ,height:2},
        shadowOpacity:0.2,
        elavation:2,
        position:'relative'
    },
    textStyle :{
        fontSize : 25,
        color: "#ffffff"
    }
};

export default Header;