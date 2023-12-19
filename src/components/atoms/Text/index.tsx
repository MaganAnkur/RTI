import {Text as RNText, TextProps, TextStyle} from 'react-native';
import {Variant} from './types';
import {FC, useMemo} from 'react';
import {styles} from './styles';
import {ColorTokens, Tokens} from 'utils/theme';

interface Props extends TextProps {
  variant?: Variant;
  color?: ColorTokens;
}

export const Text: FC<Props> = ({
  variant = 'body14-regular',
  children,
  color = 'black',
  style,
  ...restProps
}) => {
  const variantMappting: Record<Variant, TextStyle> = useMemo(
    () => ({
      title1: styles.title1,
      title2: styles.title2,
      title3: styles.title3,
      'body14-regular': styles.body14Reg,
      'body14-medium': styles.body14Med,
      'body14-bold': styles.body14bold,
      'body16-medium': styles.body16Med,
    }),
    [],
  );

  return (
    <RNText
      style={[
        {...variantMappting[variant], color: Tokens.colors[color]},
        style,
      ]}
      {...restProps}>
      {children}
    </RNText>
  );
};
