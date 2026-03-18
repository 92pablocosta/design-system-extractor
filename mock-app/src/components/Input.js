import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { BodyText } from './Text';
import theme from '../../theme';

export function Input({
  label,
  value,
  onChangeText,
  placeholder,
}) {
  return (
    <View style={styles.wrapper}>
      {label ? (
        <BodyText
          color={theme.colors.textSecondary}
          weight={theme.typography.weights.medium}
          style={styles.label}
        >
          {label}
        </BodyText>
      ) : null}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textSecondary}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: theme.spacing.xs,
  },
  label: {
    letterSpacing: theme.typography.letterSpacings.base,
  },
  input: {
    minHeight: theme.sizes.inputHeight,
    borderRadius: theme.radius.sm,
    borderWidth: theme.borders.thin,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.inputFill,
    paddingHorizontal: theme.typography.sizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.typography.families.body,
    fontSize: theme.typography.sizes.body,
    fontWeight: theme.typography.weights.regular,
    ...theme.shadows.low,
  },
});
