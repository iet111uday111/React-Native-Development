/*
*  Import Libraries to help create a Component
 */
import React from 'react';
import {Text, AppRegistry} from 'react-native';

/*
* Create a Component
*/
const App = () => (
        <Text>
            Udayaditya Singh
        </Text>
);


/*
* Render it to Device
*/

AppRegistry.registerComponent('AwesomeProject', () => App)
