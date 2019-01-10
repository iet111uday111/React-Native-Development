/** @format */

/*
*  Import Libraries to help create a Component
 */
import React from 'react';
import {View, AppRegistry} from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


/*
* Create a Component
*/
const App = () => (
        <View>
                <Header headerText={'Albums'}/>
                <AlbumList />
        </View>
        
);


/*
* Render it to Device
*/

AppRegistry.registerComponent('albums', () => App)
