import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Container } from '../components/Container';
import { BodyText, TitleText } from '../components/Text';
import theme from '../../theme';

const metas = [
  { label: 'Plano', value: 'Premium Black' },
  { label: 'Objetivo', value: 'Hipertrofia e mobilidade' },
  { label: 'Frequencia', value: '5 vezes por semana' },
];

export function ProfileScreen() {
  return (
    <Container backgroundColor={theme.colors.background}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <TitleText level="h2" color={theme.colors.surfaceDark}>
            AM
          </TitleText>
        </View>
        <View style={styles.headerContent}>
          <BodyText color={theme.colors.primary} weight={theme.typography.weights.bold} style={styles.eyebrow}>
            Perfil do Aluno
          </BodyText>
          <TitleText level="h1">Pablo Costa</TitleText>
          <BodyText color={theme.colors.textSecondary}>
            Unidade Joao Pessoa - Jardim Oceania
          </BodyText>
        </View>
      </View>

      <Card elevated style={styles.highlightCard}>
        <BodyText color={theme.colors.textSecondary}>
          Proxima avaliacao fisica
        </BodyText>
        <TitleText level="h2">24 de marco, 18:30</TitleText>
        <BodyText color={theme.colors.textSecondary}>
          Seu treinador Matheus atualizou a periodizacao desta semana com foco em posterior e core.
        </BodyText>
        <Button label="Ver treino de hoje" onPress={() => {}} />
      </Card>

      <Card style={styles.metricsCard}>
        <TitleText level="h3">Resumo</TitleText>
        <View style={styles.metricList}>
          {metas.map((item) => (
            <View key={item.label} style={styles.metricRow}>
              <BodyText color={theme.colors.textSecondary}>{item.label}</BodyText>
              <BodyText color={theme.colors.textPrimary} weight={theme.typography.weights.bold}>
                {item.value}
              </BodyText>
            </View>
          ))}
        </View>
      </Card>

      <Card style={styles.statusCard}>
        <View style={styles.statusBadge}>
          <BodyText color={theme.colors.success} weight={theme.typography.weights.bold}>
            Check-in ativo
          </BodyText>
        </View>
        <BodyText color={theme.colors.textSecondary}>
          Acesso liberado ate 22:00. Vestiario e recovery lounge disponiveis.
        </BodyText>
      </Card>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  avatar: {
    width: theme.sizes.avatar,
    height: theme.sizes.avatar,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContent: {
    flex: 1,
    gap: theme.spacing.xs,
  },
  eyebrow: {
    textTransform: 'uppercase',
    letterSpacing: theme.typography.letterSpacings.wide,
  },
  highlightCard: {
    gap: theme.spacing.md,
  },
  metricsCard: {
    gap: theme.spacing.md,
  },
  metricList: {
    gap: theme.spacing.sm,
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  statusCard: {
    gap: theme.spacing.sm,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.successSoft,
    borderRadius: theme.radius.lg,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
});
