import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Tokens} from 'utils/theme';
import PlayIcon from 'assets/icons/play.svg';
import {Text} from 'components/atoms/Text';
import {FC} from 'react';

interface Props {
  title: string;
  onPress: () => void;
}

export const TrailerItem: FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View style={styles.container}>
        <PlayIcon />
        <Text variant="body14-medium" color={'body_text'}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: Tokens.colors.grey,
    padding: Tokens.space.md,
    flexDirection: 'row',
    columnGap: Tokens.space.md,
    alignItems: 'center',
  },
});
