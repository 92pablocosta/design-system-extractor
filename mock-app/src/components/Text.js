import React from 'react';
import { StyleSheet, Text } from 'react-native';
import theme from '../../theme';

export function TitleText({
  children,
  color = theme.colors.textPrimary,
  level = 'h1',
  weight,
  style,
}) {
  const variant = titleVariants[level] || titleVariants.h1;

  return (
    <Text
      style={[
        styles.base,
        variant,
        {
          color,
          fontWeight: weight || variant.fontWeight,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function BodyText({
  children,
  color = theme.colors.textPrimary,
  weight = theme.typography.weights.light,
  style,
}) {
  return (
    <Text
      style={[
        styles.base,
        styles.body,
        {
          color,
          fontWeight: weight,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

const titleVariants = StyleSheet.create({
  h1: {
    fontFamily: theme.typography.families.heading,
    fontSize: theme.typography.sizes.h1,
    lineHeight: theme.typography.lineHeights.h1,
    fontWeight: theme.typography.weights.semibold,
    letterSpacing: theme.typography.letterSpacings.tight,
  },
  h2: {
    fontFamily: theme.typography.families.heading,
    fontSize: theme.typography.sizes.h2,
    lineHeight: theme.typography.lineHeights.h2,
    fontWeight: theme.typography.weights.semibold,
    letterSpacing: theme.typography.letterSpacings.tight,
  },
  h3: {
    fontFamily: theme.typography.families.heading,
    fontSize: theme.typography.sizes.h3,
    lineHeight: theme.typography.lineHeights.h3,
    fontWeight: theme.typography.weights.semibold,
    letterSpacing: theme.typography.letterSpacings.base,
  },
});

const styles = StyleSheet.create({
  base: {
    includeFontPadding: false,
  },
  body: {
    fontFamily: theme.typography.families.body,
    fontSize: theme.typography.sizes.body,
    lineHeight: theme.typography.lineHeights.body,
    letterSpacing: theme.typography.letterSpacings.base,
  },
});
