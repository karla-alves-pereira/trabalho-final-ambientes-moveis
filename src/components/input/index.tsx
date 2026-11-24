import React, { forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';

export const Input = forwardRef<TextInput, TextInputProps>(
  ({ style, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        style={[styles.input, style]}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';