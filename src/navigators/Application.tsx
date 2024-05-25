import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { useTheme } from "@/theme";

import type { ApplicationStackParamList } from "@/types/navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@/screens/HomeScreen";
import SearchScreen from "@/screens/SearchScreen";
import TicketScreen from "@/screens/TicketScreen";
import UserScreen from "@/screens/UserScreen";

import HomeActiveIcon from "@/theme/icons/HomeActiveIcon";
import HomePassive from "@/theme/icons/HomePassiveIcon";
import SearchActive from "@/theme/icons/SearchActiveIcon";
import SearchPassive from "@/theme/icons/SearchPassiveIcon";
import TicketActiveIcon from "@/theme/icons/TicketActiveIcon";
import TicketPassive from "@/theme/icons/TicketPassiveIcon";
import TicketPassiveIcon from "@/theme/icons/TicketPassiveIcon";
import UserActiveIcon from "@/theme/icons/UserActiveIcon";
import UserPassiveIcon from "@/theme/icons/UserPassiveIcon";

const Stack = createStackNavigator<ApplicationStackParamList>();
const Tab = createBottomTabNavigator();

function ApplicationNavigator() {
  const { variant, navigationTheme } = useTheme();

  return (
    <NavigationContainer theme={navigationTheme}>
      <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitleAlign: "center",
            tabBarIcon: ({ focused }) => {
              return focused ? <HomeActiveIcon /> : <HomePassive />;
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return focused ? <SearchActive /> : < SearchPassive/>;
            },
          }}
        />
        <Tab.Screen
          name="Tickets"
          component={TicketScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return focused ? <TicketActiveIcon /> : <TicketPassiveIcon />;
            },
          }}
        />
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return focused ? <UserActiveIcon /> : <UserPassiveIcon />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
