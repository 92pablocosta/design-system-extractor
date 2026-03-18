import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { BodyText } from './Text';
import theme from '../../theme';

export function BottomTabBar({ tabs, activeTab, onChange }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.bar}>
        {tabs.map((tab) => {
          const isActive = tab.key === activeTab;

          return (
            <Pressable
              key={tab.key}
              accessibilityRole="button"
              onPress={() => onChange(tab.key)}
              style={[styles.tab, isActive && styles.activeTab]}
            >
              <BodyText
                color={isActive ? theme.colors.navActive : theme.colors.navInactive}
                weight={isActive ? theme.typography.weights.bold : theme.typography.weights.medium}
                style={styles.label}
              >
                {tab.label}
              </BodyText>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: theme.spacing.lg,
    right: theme.spacing.lg,
    bottom: theme.spacing.lg,
  },
  bar: {
    minHeight: theme.sizes.tabBarHeight,
    backgroundColor: theme.colors.navSurface,
    borderRadius: theme.radius.lg,
    borderWidth: theme.borders.thin,
    borderColor: theme.colors.cardBorder,
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.sm,
    gap: theme.spacing.sm,
    ...theme.shadows.elevated,
  },
  tab: {
    flex: 1,
    minHeight: theme.sizes.buttonMinHeight,
    borderRadius: theme.radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: theme.colors.accentSoft,
  },
  label: {
    textTransform: 'uppercase',
    letterSpacing: theme.typography.letterSpacings.wide,
  },
});
