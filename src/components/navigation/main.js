import * as React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from '../../features/screens/home/home.screen';
import VideoScreen from '../../features/screens/video.screen';
import SearchScreen from '../../features/screens/search/search.screen';
import BookmarksScreen from '../../features/screens/save.screen';
import DetailSearch from '../../features/screens/search/detail.search';

// Screen names
const homeName = 'Home';
const videoName = 'Video';
const searchName = 'Search';
const bookmarksName = 'Bookmarks';

const Tab = createBottomTabNavigator();
const HeaderScreen = () => ({ headerShown: false });

const HomeStack = createStackNavigator();
function HomeStacks() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home Stack" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}
const VideoStack = createStackNavigator();
function VideoStacks() {
  return (
    <VideoStack.Navigator>
      <VideoStack.Screen name="Home Stack" component={VideoScreen} />
    </VideoStack.Navigator>
  );
}
const SearchStack = createStackNavigator();
function SearchStacks() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Home Stack" component={SearchScreen} />
    </SearchStack.Navigator>
  );
}
const BookmarksStack = createStackNavigator();
function BookmarksStacks() {
  return (
    <BookmarksStack.Navigator>
      <BookmarksStack.Screen name="Home Stack" component={BookmarksScreen} />
    </BookmarksStack.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
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
        activeTintColor: '#F5344B',
        inactiveTintColor: 'grey',
      }}
    >
      <Tab.Screen
        name={homeName}
        component={HomeStacks}
        options={HeaderScreen}
      />
      <Tab.Screen
        name={videoName}
        component={VideoStacks}
        options={HeaderScreen}
      />
      <Tab.Screen
        name={searchName}
        component={SearchStacks}
        options={HeaderScreen}
      />
      <Tab.Screen
        name={bookmarksName}
        component={BookmarksStacks}
        options={HeaderScreen}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
export default function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tab" component={Tabs} />
        <Stack.Screen name="Detail Search" component={DetailSearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
