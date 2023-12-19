import {NavigationProp} from '@react-navigation/native';
import {AppNavigatorParams} from 'navigation/app-navigator';
import {useNavigation} from '@react-navigation/native';
type AppNavigator = NavigationProp<AppNavigatorParams>;

export const useAppNavigation = () => {
  return useNavigation<AppNavigator>();
};
