import React from 'react';
import { Text, View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <View>
                      
                </View>
                <View style={styles.headerContentStyles}>
                     <Text>{props.album.title}</Text>
                     <Text>{props.album.artist}</Text>
                </View>
                <Text>{props.album.title}</Text>
            </CardSection>
        </Card>
    );
}

const styles = {
    headerContentStyles: {
        flexDirection:'column',
        justifyConent:'space-around'
    }
}

export default AlbumDetail;
