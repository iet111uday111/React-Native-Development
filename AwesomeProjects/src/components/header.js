/*
* Import libraries for making a component
 */
import React from 'react';
import { Text, View } from 'react-native';

/*
* Make a component
*/
const Header = () => {
    const { viewStyle, textStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text>
                <Text style={textStyle}>Albums</Text>
            </Text>
        </View>
    );
}

const styles = {
    viewStyle: {
        backgroundColor: '#e5d7d7',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: '#ba6a6a'
    }
};


/*
* Make the component available to other parts of the app
*/

export default Header;