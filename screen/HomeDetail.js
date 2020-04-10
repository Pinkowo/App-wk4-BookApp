import React from 'react';
import { StyleSheet, Text, View, Image,TouchableHighlight,TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';

const HomeDetail =({bookList,navigation}) => {
    return(
        <View>
            <TouchableOpacity onPress={() => {}} underlayColor="#f0f0f0" style={styles.cardContainerStyle}>
                <View style={styles.coverCard}>
                    <Image 
                        source={{uri: bookList.coverUrl}} style={styles.coverStyle}
                    />
                </View>
                <View style={styles.textCard}>
                    <Text style={styles.titleStyle}>{bookList.title}</Text>
                    <Text style={styles.artistStyle}>{bookList.artist}</Text>
                    <Text style={styles.introStyle}>{bookList.intro}</Text>
                    <View style={{marginTop:10}}>
                        <Progress.Bar 
                        progress={bookList.progressBar} width={230} height={5} 
                        color={"#70b4a1"} unfilledColor={"#c3c3c3"} borderColor={"#fff"}/>
                    </View>
                    <TouchableHighlight onPress={() => {}} underlayColor="red" 
                    style={{justifyContent: 'center',marginTop:5,
                    height:25,width:bookList.btnWidth,paddingBottom:5}}>
                        <Text style={{fontFamily:"Roboto",
                        color:bookList.color,fontWeight:bookList.fontweight}}>
                            {bookList.progressText}
                        </Text>
                    </TouchableHighlight>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    
    cardContainerStyle:{
        marginTop:10,
        backgroundColor:"#fff",
        borderColor:"#ddd",
        borderBottomWidth:1,
        flexDirection:"row",
        justifyContent:"flex-start",
    },
    coverStyle:{
        height:160,
        width:108,
    },
    coverCard:{
        height:168,
        width:116,
        marginTop:5,
        marginBottom:16,
        marginLeft:18,
        marginRight:27,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:1,
        //borderWidth:1,
        //borderColor:"#fff",
    },
    titleStyle:{
        fontFamily:"Roboto",
        fontSize:18,
        color:"#2e2e2e",
        fontWeight:"bold",
    },
    artistStyle:{
        fontFamily:"Roboto",
        fontSize:14,
        color:"#717171",
        lineHeight:30
    },
    introStyle:{
        fontFamily:"Roboto",
        fontSize:12,
        color:"#b1b1b1"
    },
    textCard:{
        width:230,
        marginTop:18
    },
});

export default HomeDetail;