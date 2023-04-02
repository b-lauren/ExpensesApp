import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RecentExpenses } from './screens/RecentExpenses';
import { AllExpenses } from './screens/AllExpenses';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ManageExpenses } from './screens/ManageExpenses';
import { GlobalStyles } from './constants/styles';
import { IconButton } from './components/UI/IconButton';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

//Bottom Tab Navigation
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.primary100 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: '#000' },
        tabBarActiveTintColor: '#A498E1',
        headerRight: () => {
          <IconButton />;
        },
        animationEnabled: false,
      }}
    >
      <Tab.Screen
        name="Recent Expenses"
        component={RecentExpenses}
        options={{
          tabBarLabel: 'Recent',
          tabBarLabelStyle: { fontSize: 16 },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt-outline" size={20} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="All Expenses"
        component={AllExpenses}
        options={{
          tabBarLabel: 'All Expenses',
          tabBarLabelStyle: { fontSize: 16 },
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="creditcard" size={20} color="white" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

//Main Navigation
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
