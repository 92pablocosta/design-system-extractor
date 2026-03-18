import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Container } from '../components/Container';
import { BodyText, TitleText } from '../components/Text';
import theme from '../../theme';

const details = [
  'Warm metallic accents reinforce the premium brand direction.',
  'Soft neutral surfaces keep the interface calm and readable.',
  'Pill CTAs and restrained shadows mirror the extracted design language.',
];

export function DetailsScreen({ onBack }) {
  return (
    <Container backgroundColor={theme.colors.backgroundAlt}>
      <View style={styles.header}>
        <Button label="Back" onPress={onBack} variant="secondary" />
      </View>

      <Card elevated style={styles.storyCard}>
        <BodyText
          color={theme.colors.primary}
          weight={theme.typography.weights.bold}
          style={styles.eyebrow}
        >
          Membership Preview
        </BodyText>
        <TitleText level="h1" color={theme.colors.surfaceDark}>
          A minimal experience shaped by the extracted theme.
        </TitleText>
        <BodyText color={theme.colors.textSecondary}>
          This screen keeps a native-feeling information hierarchy with generous margins, clear cards, and one focused action area.
        </BodyText>
      </Card>

      <Card style={styles.detailsCard}>
        <TitleText level="h2">Why it feels premium</TitleText>
        <View style={styles.list}>
          {details.map((item) => (
            <View key={item} style={styles.listRow}>
              <View style={styles.dot} />
              <BodyText color={theme.colors.textSecondary} style={styles.listText}>
                {item}
              </BodyText>
            </View>
          ))}
        </View>
      </Card>

      <Card style={styles.ctaCard}>
        <TitleText level="h3">Ready to visit the club?</TitleText>
        <BodyText color={theme.colors.textSecondary}>
          Reserve a guided walkthrough and keep the visual tone consistent across the journey.
        </BodyText>
        <Button label="Book Visit" onPress={onBack} />
      </Card>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'flex-start',
  },
  storyCard: {
    gap: theme.spacing.md,
    backgroundColor: theme.colors.white,
  },
  eyebrow: {
    textTransform: 'uppercase',
    letterSpacing: theme.typography.letterSpacings.wide,
  },
  detailsCard: {
    gap: theme.spacing.md,
    backgroundColor: theme.colors.white,
  },
  list: {
    gap: theme.spacing.md,
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: theme.spacing.sm,
  },
  dot: {
    width: theme.spacing.sm,
    height: theme.spacing.sm,
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.primary,
    marginTop: theme.spacing.xs,
  },
  listText: {
    flex: 1,
  },
  ctaCard: {
    gap: theme.spacing.md,
    backgroundColor: theme.colors.surfaceDark,
  },
});
