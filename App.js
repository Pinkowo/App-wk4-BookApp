import * as React from 'react';
import { Button, View,StyleSheet,Image,Text,SafeAreaView } from 'react-native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer,DrawerActions } from '@react-navigation/native';

import HomeScreen from './screen/HomeScreen';
import icon from "./json/icon.json";

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <View style={{marginTop:40}}>
          <Image source={{uri: icon.drawer.profile}} style={styles.profileStyle}/>
          <Text style={styles.name}>YiHsinLi</Text>
          <Text style={styles.email}>pinkowo057@gmail.com</Text>
        </View>
        <Image source={{uri: icon.drawer.downArrow}} style={styles.arrowStyle}/>
      </View>
      <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
        <Image source={{uri: icon.drawer.Home}} style={styles.iconStyle}/>
        <DrawerItem label="Home"/>
      </View>

        <DrawerItemList {...props} />


      <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
        <Image source={{uri: icon.drawer.Favorites}} style={styles.iconStyle}/>
        <DrawerItem label="Favorites"/>
      </View>
      <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
        <Image source={{uri: icon.drawer.Settings}} style={styles.iconStyle}/>
        <DrawerItem label="Settings"/>
      </View>
      <View style={{flexDirection:"row",justifyContent:"flex-start"}}>
        <Image source={{uri: icon.drawer.AboutUs}} style={styles.iconStyle}/>
        <DrawerItem label="About us"/>
      </View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" 
      drawerStyle={{ backgroundColor: '#fff',width: 320,}}
      drawerContentOptions={{
        activeBackgroundColor: '#00b49f',
        activeTintColor:'#fff',
        inactiveBackgroundColor:'#000',
        inactiveTintColor:'#000'
      }}
      drawerContent={props => <CustomDrawerContent {...props} />} >
        <Drawer.Screen name="My Book" component={HomeScreen}
        options={{
          drawerIcon: ({ focused, size }) => (
            <Image
              source={require('./assets/book.png')}
              style={[focused ? styles.drawerActive : styles.drawerInActive,
                { height: size, width: size, marginLeft:15,marginRight:-10}]}
            />
            )}
          }/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerHeader:{
    height:198,
    marginTop:-30,
    marginLeft:-15,
    backgroundColor:"#00b49f",
    flexDirection:"row",
    justifyContent:"space-around",
  },
  profileStyle:{
    width:70,
    height:70,
  },
  name:{
    fontSize:14,
    color:"#FFF",
    fontWeight:"bold",
    marginTop:20
  },
  email:{
    fontSize:14,
    color:"#fff",
    fontWeight:"normal",
  },
  arrowStyle:{
    width:24,
    height:24,
    marginTop:150,
    marginRight:-10
  },
  iconStyle:{
    width:30,
    height:30,
    marginTop:15,
    marginLeft:30
  }
});

//<DrawerItem label="Help" onPress={() => alert('Link to help')} />
/*        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="My Book" component={HomeScreen} />
        <Drawer.Screen name="Favorites" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={HomeScreen} />
        <Drawer.Screen name="About Us" component={HomeScreen} />    */