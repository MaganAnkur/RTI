import {FC, useMemo} from 'react';
import {View, ViewStyle} from 'react-native';
import {SpaceTokens, Tokens} from 'utils/theme';

interface Props {
  space: SpaceTokens;
  direction: 'vertical' | 'horizontal';
}

export const Spacer: FC<Props> = ({space, direction}) => {
  const style: ViewStyle = useMemo(() => {
    return direction === 'vertical'
      ? {height: Tokens.space[space]}
      : {width: Tokens.space[space]};
  }, [direction, space]);

  return <View style={style} />;
};
