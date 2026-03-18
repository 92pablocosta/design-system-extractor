import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { BodyText } from './Text';
import theme from '../../theme';

const variantStyles = {
  primary: {
    backgroundColor: theme.buttons.primary.backgroundColor,
    borderColor: theme.colors.transparent,
    textColor: theme.colors.textInverse,
    shadow: theme.shadows.medium,
  },
  secondary: {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.transparent,
    textColor: theme.colors.textInverse,
    shadow: theme.shadows.low,
  },
  outline: {
    backgroundColor: theme.colors.transparent,
    borderColor: theme.colors.divider,
    textColor: theme.colors.textInverse,
    shadow: theme.shadows.none,
  },
};

export function Button({
  label,
  onPress,
  variant = 'primary',
  leftAccessory = null,
}) {
  const currentVariant = variantStyles[variant] || variantStyles.primary;

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: currentVariant.backgroundColor,
          borderColor: currentVariant.borderColor,
          opacity: pressed ? theme.opacity.subtle : theme.opacity.full,
        },
        currentVariant.shadow,
      ]}
    >
      <View style={styles.content}>
        {leftAccessory}
        <BodyText
          color={currentVariant.textColor}
          weight={theme.typography.weights.bold}
          style={styles.label}
        >
          {label}
        </BodyText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: theme.sizes.buttonMinHeight,
    borderRadius: theme.buttons.primary.borderRadius,
    paddingHorizontal: theme.buttons.primary.paddingHorizontal,
    paddingVertical: theme.buttons.primary.paddingVertical,
    borderWidth: theme.borders.thin,
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.sm,
  },
  label: {
    letterSpacing: theme.typography.letterSpacings.wide,
    textTransform: 'uppercase',
  },
});
