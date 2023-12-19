import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../screens/Home';
import {MovieDetailsScreen} from 'screens/MovieDetails';
import {Tokens} from 'utils/theme';
import {Header} from 'components/atoms/Header';

export type AppNavigatorParams = {
  HomeScreen: undefined;
  MovieDetailScreen: {movieId: number};
};

const App = createNativeStackNavigator<AppNavigatorParams>();

export const AppNavigator = () => {
  return (
    <App.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={{
        statusBarColor: Tokens.colors.secondary,
        header: Header,
      }}>
      <App.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          title: 'Pop Movies',
        }}
      />
      <App.Screen
        name={'MovieDetailScreen'}
        component={MovieDetailsScreen}
        options={{
          headerBackVisible: true,
          title: 'Movie details',
        }}
      />
    </App.Navigator>
  );
};
