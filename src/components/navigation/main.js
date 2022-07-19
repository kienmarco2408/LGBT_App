import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../../features/screens/home.screen';
import VideoScreen from '../../features/screens/video.screen';
import SearchScreen from '../../features/screens/search.screen';
import BookmarksScreen from '../../features/screens/save.screen';

// Screen names
const homeName = 'Home';
const videoName = 'Video';
const searchName = 'Search'
const bookmarksName = 'Bookmarks';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === videoName) {
                        iconName = focused ? 'play' : 'play-outline';
                    } else if (rn === searchName) {
                        iconName = focused ? 'search' : 'search-outline';
                    } else if (rn === bookmarksName) {
                        iconName = focused ? 'bookmarks' : 'bookmarks-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor:'#F5344B',
                inactiveTintColor: 'grey'
            }}>

            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={videoName} component={VideoScreen}/>
            <Tab.Screen name={searchName} component={SearchScreen}/>
            <Tab.Screen name={bookmarksName} component={BookmarksScreen}/>

            
            </Tab.Navigator>
        </NavigationContainer>
    )
}