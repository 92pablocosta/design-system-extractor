import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../../theme';

export function Card({ children, elevated = false, style }) {
  return (
    <View
      style={[
        styles.card,
        elevated ? theme.shadows.elevated : theme.shadows.low,
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.card,
    padding: theme.spacing.lg,
    borderWidth: theme.borders.thin,
    borderColor: theme.colors.cardBorder,
  },
});
