/*
* Import libraries for making a component
 */
import React from 'react';
import { Text, View } from 'react-native';

/*
* Make a component
*/
const Header = (props) => {
    const { viewStyle, textStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text>
                <Text style={textStyle}>{props.headerText}</Text>
            </Text>
        </View>
    );
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 10 },
        shadowOpacity: .7,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 28
    }
};


/*
* Make the component available to other parts of the app
*/

export default Header;