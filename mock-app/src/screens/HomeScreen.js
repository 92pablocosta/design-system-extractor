import React, { useMemo, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Container } from '../components/Container';
import { Input } from '../components/Input';
import { BodyText, TitleText } from '../components/Text';
import theme from '../../theme';

const featureContent = [
  {
    title: '24h Access',
    body: 'A premium training rhythm with a calm interface and a strong CTA hierarchy.',
  },
  {
    title: 'Curated Classes',
    body: 'Neutral surfaces, warm accents, and high-contrast typography inspired by the source system.',
  },
  {
    title: 'Recovery Lounge',
    body: 'Card groupings and generous spacing follow a polished iOS content layout.',
  },
];

export function HomeScreen({ onOpenDetails }) {
  const [query, setQuery] = useState('');

  const filteredFeatures = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return featureContent;
    }

    return featureContent.filter(({ title, body }) =>
      `${title} ${body}`.toLowerCase().includes(normalizedQuery)
    );
  }, [query]);

  return (
    <Container>
      <Card elevated style={styles.heroCard}>
        <BodyText
          color={theme.colors.primary}
          weight={theme.typography.weights.bold}
          style={styles.eyebrow}
        >
          Premium Fitness
        </BodyText>
        <TitleText level="h1">Train with focus in a refined iOS experience.</TitleText>
        <BodyText color={theme.colors.textSecondary}>
          The layout is driven by the provided Letsvibe theme, keeping all color, spacing, and radius decisions centralized.
        </BodyText>
        <View style={styles.heroActions}>
          <Button label="View Details" onPress={onOpenDetails} />
          <Button label="Explore Plans" onPress={onOpenDetails} variant="outline" />
        </View>
      </Card>

      <Input
        label="Search experiences"
        value={query}
        onChangeText={setQuery}
        placeholder="Pilates, recovery, personal coaching"
      />

      <View style={styles.sectionHeader}>
        <TitleText level="h2">Highlights</TitleText>
        <Pressable onPress={onOpenDetails} style={styles.linkButton}>
          <BodyText
            color={theme.colors.primary}
            weight={theme.typography.weights.bold}
          >
            See all
          </BodyText>
        </Pressable>
      </View>

      <View style={styles.featureList}>
        {filteredFeatures.map((feature) => (
          <Card key={feature.title} style={styles.featureCard}>
            <TitleText level="h3">{feature.title}</TitleText>
            <BodyText color={theme.colors.textSecondary}>{feature.body}</BodyText>
          </Card>
        ))}
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    minHeight: theme.sizes.heroCardMinHeight,
    backgroundColor: theme.colors.accentSoft,
    gap: theme.spacing.md,
    justifyContent: 'space-between',
  },
  eyebrow: {
    textTransform: 'uppercase',
    letterSpacing: theme.typography.letterSpacings.wide,
  },
  heroActions: {
    gap: theme.spacing.sm,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.sm,
  },
  linkButton: {
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.sm,
  },
  featureList: {
    gap: theme.spacing.md,
  },
  featureCard: {
    gap: theme.spacing.sm,
  },
});
