import React from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

import HomeDetail from "./HomeDetail";
import bookList from "../json/bookList.json";
import icon from "../json/icon.json";


const HomeScreen = ({navigation}) => {
    return(
        <View style={{flex:1,backgroundColor:"#fff"}}>
            <View style={styles.headerContentStyle}>
                <View style={styles.headerCenter}>
                    <TouchableOpacity
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <Image source={{uri: icon.header.hamburger}} style={styles.headerIcon}/>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>My Book</Text>
                    <Image source={{uri: icon.header.search}} style={styles.headerIcon}/>
                </View>
            </View>

            <FlatList
            data={bookList}
            renderItem={({item}) => 
            <HomeDetail
                bookList={item}
                navigation={navigation}
                />}
                keyExtractor={(item,index) => index.toString()}
            />

            <View style={styles.bottom}>
                <Image source={{uri: icon.bottom.Home}} style={styles.bottomIcon}/>
                <Image source={{uri: icon.bottom.MyBook}} style={styles.bottomIcon}/>
                <Image source={{uri: icon.bottom.Favorites}} style={styles.bottomIcon}/>               
            </View>
            <View style={{flexDirection:"row"}}>
                <Text style={{width:140,textAlign:"center",marginTop:-8,marginBottom:10,
                color:icon.bottom.bottomIconColor[0]}}>
                    Home</Text>
                <Text style={{width:140,textAlign:"center",marginTop:-8,marginBottom:10,
                color:icon.bottom.bottomIconColor[1]}}>
                    My Book</Text>
                <Text style={{width:140,textAlign:"center",marginTop:-8,marginBottom:10,
                color:icon.bottom.bottomIconColor[0]}}>
                    Favorites</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    headerLeft:{
        marginTop:20,
        marginLeft: 8,
        width: 360,
        height: 35
      },
      headerRight:{
        marginTop:20,
        marginRight: 8,
        marginLeft:5,
        width: 30,
        height: 35
      },
      headerContentStyle:{
        width:420,
        height:80,
        backgroundColor:'#00b49f',
        alignItems: 'center',
    },
    headerCenter:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:390
    },
    headerIcon:{
        width:40,
        height:40,
        marginTop:32
    },
    headerText:{
        marginTop:32,
        color:"#fff",
        fontSize:20,
        fontWeight:"bold",
    },
    bottom:{
        width: 420,
        height: 56,
        flexDirection:"row",
        justifyContent:"space-around",
        borderColor:"#ddd",
        borderTopWidth:1,
        paddingTop:4
    },
    bottomIcon:{
        width:50,
        height:50,
    },
    bottomText:{
        width:140,
        textAlign:"center",
        marginTop:-8,
        marginBottom:10
    },

});
export default HomeScreen;