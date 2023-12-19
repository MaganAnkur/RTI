import {FC, useMemo} from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {Tokens} from 'utils/theme';

const {width} = Dimensions.get('window');

type Variant = 'primary' | 'secondary';

export interface CardProps extends ViewProps {
  onPress: () => void;
  variant?: Variant;
}

export const Card: FC<CardProps> = ({
  onPress,
  variant = 'primary',
  ...restProps
}) => {
  const variantMapping: Record<Variant, ViewStyle> = useMemo(
    () => ({
      primary: styles.container,
      secondary: styles.container_small,
    }),
    [],
  );

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View
        {...restProps}
        style={[
          variantMapping[variant],
          {backgroundColor: Tokens.colors.primary},
        ]} //Fallback color as primary
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    height: 280,
  },
  container_small: {
    width: 115,
    height: 170,
  },
});
