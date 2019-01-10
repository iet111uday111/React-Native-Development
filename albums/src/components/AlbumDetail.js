import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image } = album;
    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerFontStyle,
        imageStyle
      } = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerFontStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{uri: image}} />
            </CardSection>
        </Card>
    );
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyConent: 'space-around'
    },
    headerFontStyle:{
      fontSize:20
    },
    thumbnailStyle: {
        width: 50,
        height: 50,
    },
    thumbnailContainerStyle:{
        justifyConent:'Center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10

    },
    imageStyle:{
        height:300,
        flex:1,
        width:null
    }
}

export default AlbumDetail;
