import {FC} from 'react';
import {StyleSheet, TouchableOpacity, View, ViewProps} from 'react-native';
import {Text} from '../Text';
import {Tokens} from 'utils/theme';

interface Props extends ViewProps {
  title: string;
  onPress: () => void;
}

export const Button: FC<Props> = ({title, onPress, ...restProps}) => {
  return (
    <TouchableOpacity onPress={onPress} testID="touchable-button">
      <View style={[styles.container]} {...restProps}>
        <Text variant={'body16-medium'} color={'white'}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: Tokens.space.md,
    paddingHorizontal: Tokens.space.xl,
    backgroundColor: Tokens.colors.primary,
    borderRadius: Tokens.radius.$xxsm,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 200,
  },
});
