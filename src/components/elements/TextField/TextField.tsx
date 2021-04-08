import * as React from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from '@src/components/elements/Icon';
import styles from './styles';

interface OwnProps {
  leftIcon?: string;
  leftIconSize?: number;
  rightIcon?: string;
  rightIconSize?: number;
  containerStyle?: StyleProp<ViewStyle>;
  hasMargin?: boolean;
  phoneActive?:boolean
}

type TextFieldProps = OwnProps & TextInputProps;

const TextField: React.FC<TextFieldProps> = ({
  leftIcon,
  leftIconSize,
  rightIcon,
  rightIconSize,
  style,
  containerStyle,
  hasMargin,
  phoneActive,
  ...rest
}) => {
  const {
    colors: {text, background},
  } = useTheme();
  let margin = 0;
  if (hasMargin) {
    margin = 5;
  }

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: background, marginTop: margin, marginBottom: margin},
        containerStyle,
      ]}>
      {leftIcon && (
        <Icon style={styles.leftIcon} name={leftIcon} size={leftIconSize} />
      )}
      <TextInput
        style={[{color: text}, styles.textField, style]}
        placeholderTextColor={text}
        underlineColorAndroid="transparent"
        {...rest}
      />
      {rightIcon && (
        <Icon style={ styles.rightIcon } name={rightIcon} size={rightIconSize} />
      )}
    </View>
  );
};

TextField.defaultProps = {
  leftIconSize: 14,
  rightIconSize: 14,
};

export default TextField;
