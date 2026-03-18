import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Container } from '../components/Container';
import { BodyText, TitleText } from '../components/Text';
import theme from '../../theme';

const classes = [
  { nome: 'Pilates', horario: 'Seg, Qua e Sex - 07:00', vagas: '6 vagas' },
  { nome: 'Spinning', horario: 'Ter e Qui - 18:30', vagas: '4 vagas' },
  { nome: 'Funcional', horario: 'Sabado - 09:00', vagas: '8 vagas' },
];

export function ClassesScreen() {
  return (
    <Container backgroundColor={theme.colors.background}>
      <View style={styles.header}>
        <BodyText color={theme.colors.primary} weight={theme.typography.weights.bold} style={styles.eyebrow}>
          Aulas
        </BodyText>
        <TitleText level="h1">Aulas da semana</TitleText>
        <BodyText color={theme.colors.textSecondary}>
          Reserve suas aulas favoritas mantendo o mesmo tom premium do design system de referencia.
        </BodyText>
      </View>

      <View style={styles.classList}>
        {classes.map((item) => (
          <Card key={item.nome} style={styles.classCard}>
            <View style={styles.classHeader}>
              <View style={styles.classTitle}>
                <TitleText level="h3">{item.nome}</TitleText>
                <BodyText color={theme.colors.textSecondary}>{item.horario}</BodyText>
              </View>
              <View style={styles.spotBadge}>
                <BodyText color={theme.colors.primary} weight={theme.typography.weights.bold}>
                  {item.vagas}
                </BodyText>
              </View>
            </View>
            <Button label="Reservar vaga" onPress={() => {}} />
          </Card>
        ))}
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    gap: theme.spacing.sm,
  },
  eyebrow: {
    textTransform: 'uppercase',
    letterSpacing: theme.typography.letterSpacings.wide,
  },
  classList: {
    gap: theme.spacing.md,
  },
  classCard: {
    gap: theme.spacing.md,
  },
  classHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  classTitle: {
    flex: 1,
    gap: theme.spacing.xs,
  },
  spotBadge: {
    borderRadius: theme.radius.lg,
    backgroundColor: theme.colors.accentSoft,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
});
