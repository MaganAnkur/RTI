import {Platform, StyleSheet} from 'react-native';
import {Tokens} from 'utils/theme';
import BackSVG from 'assets/icons/back.svg';
import MoreSVG from 'assets/icons/more.svg';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {
  getHeaderTitle,
  HeaderBackButton,
  HeaderBackButtonProps,
  Header as RNHeader,
} from '@react-navigation/elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text} from '../Text';

export const Header = ({
  options,
  route,
  navigation,
  ...restProps
}: NativeStackHeaderProps) => {
  const title = getHeaderTitle(options, route.name);
  const {top} = useSafeAreaInsets();

  return (
    <RNHeader
      title={title}
      {...restProps}
      headerTitleAlign="left"
      headerShadowVisible={false}
      headerStyle={{
        ...styles.container,
        height: Platform.select({
          ios: 50 + top,
          android: 80 + top,
        }),
      }}
      // eslint-disable-next-line react/no-unstable-nested-components
      headerTitle={({children}) => (
        <Text variant="title3" color="white" style={styles.titleStyle}>
          {children}
        </Text>
      )}
      headerLeftLabelVisible={false}
      // eslint-disable-next-line react/no-unstable-nested-components
      headerLeft={props =>
        options.headerBackVisible ? (
          <BackButton {...props} onPress={navigation.goBack} />
        ) : null
      }
      headerRight={RightButton}
    />
  );
};

const BackButton = (props: HeaderBackButtonProps) => {
  return (
    <HeaderBackButton
      {...props}
      // eslint-disable-next-line react/no-unstable-nested-components
      backImage={() => <BackSVG />}
      style={[styles.headerButtons, {marginLeft: Tokens.space.md}]}
    />
  );
};

const RightButton = () => {
  return (
    <HeaderBackButton
      labelVisible={false}
      // eslint-disable-next-line react/no-unstable-nested-components
      backImage={() => <MoreSVG />}
      style={[styles.headerButtons, {marginRight: Tokens.space.md}]}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Tokens.colors.secondary,
  },
  titleStyle: {
    marginTop: Tokens.space.xxl,
  },
  headerButtons: {
    marginTop: Tokens.space.xxl,
  },
});
