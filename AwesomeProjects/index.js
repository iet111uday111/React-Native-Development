/*
*  Import Libraries to help create a Component
 */
import React from 'react';
import ReactNative from 'react-native';

/*
* Create a Component
*/
const App = () => {
    return (
        <Text>
            Udayaditya Singh
        </Text>
    );
}

/*
* Render it to Device
*/

ReactNative.AppRegistry.registerComponent('albums', () => App)
