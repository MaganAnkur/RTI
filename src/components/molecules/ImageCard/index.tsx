import {Card, CardProps} from 'components/atoms/Card';
import {FC} from 'react';
import {Image, StyleSheet} from 'react-native';

interface Props extends CardProps {
  imgSrc: string;
}

export const ImageCard: FC<Props> = ({
  imgSrc,
  onPress,
  variant = 'primary',
}) => {
  return (
    <Card onPress={onPress} variant={variant}>
      <Image source={{uri: imgSrc}} style={styles.image} />
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});
