import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Card } from '../components/Card';
import { Container } from '../components/Container';
import { BodyText, TitleText } from '../components/Text';
import theme from '../../theme';

const workouts = [
  {
    id: 'treino-a',
    nome: 'Membros inferiores',
    foco: 'Pernas e gluteos',
    trainer: 'Matheus',
    exercises: [
      { nome: 'Agachamento livre', series: '4', repeticoes: '10' },
      { nome: 'Leg press', series: '4', repeticoes: '12' },
      { nome: 'Stiff com halteres', series: '3', repeticoes: '12' },
    ],
  },
  {
    id: 'treino-b',
    nome: 'Peito/Tríceps',
    foco: 'Peito, ombros e triceps',
    trainer: 'Matheus',
    exercises: [
      { nome: 'Supino reto', series: '4', repeticoes: '8' },
      { nome: 'Desenvolvimento', series: '3', repeticoes: '10' },
      { nome: 'Triceps corda', series: '3', repeticoes: '12' },
    ],
  },
  {
    id: 'treino-c',
    nome: 'Costas/Bíceps',
    foco: 'Bíceps',
    trainer: 'Matheus',
    exercises: [
      { nome: 'Supino reto', series: '4', repeticoes: '8' },
      { nome: 'Desenvolvimento', series: '3', repeticoes: '10' },
      { nome: 'Triceps corda', series: '3', repeticoes: '12' },
    ],
  },
];

export function WorkoutsScreen() {
  const [selectedWorkout, setSelectedWorkout] = useState(workouts[0].id);

  const currentWorkout = workouts.find((workout) => workout.id === selectedWorkout) || workouts[0];

  return (
    <Container backgroundColor={theme.colors.background}>
      <View style={styles.header}>
        <BodyText color={theme.colors.primary} weight={theme.typography.weights.bold} style={styles.eyebrow}>
          Treinos
        </BodyText>
        <TitleText level="h1">Treinos montados por Matheus</TitleText>
        <BodyText color={theme.colors.textSecondary}>
          Cada treino contem exercicios, series e repeticoes definidos para sua fase atual.
        </BodyText>
      </View>

      <View style={styles.selector}>
        {workouts.map((workout) => {
          const isActive = workout.id === selectedWorkout;

          return (
            <Pressable
              key={workout.id}
              onPress={() => setSelectedWorkout(workout.id)}
              style={[styles.selectorItem, isActive && styles.selectorItemActive]}
            >
              <BodyText
                color={isActive ? theme.colors.textInverse : theme.colors.textSecondary}
                weight={theme.typography.weights.bold}
              >
                {workout.nome}
              </BodyText>
            </Pressable>
          );
        })}
      </View>

      <Card elevated style={styles.workoutCard}>
        <View style={styles.workoutHeader}>
          <View style={styles.workoutTitleBlock}>
            <TitleText level="h2">{currentWorkout.nome}</TitleText>
            <BodyText color={theme.colors.textSecondary}>{currentWorkout.foco}</BodyText>
          </View>
          <View style={styles.trainerBadge}>
            <BodyText color={theme.colors.primary} weight={theme.typography.weights.bold}>
              {currentWorkout.trainer}
            </BodyText>
          </View>
        </View>

        <View style={styles.exerciseList}>
          {currentWorkout.exercises.map((exercise) => (
            <Card key={exercise.nome} style={styles.exerciseCard}>
              <TitleText level="h3">{exercise.nome}</TitleText>
              <View style={styles.exerciseMeta}>
                <View style={styles.exercisePill}>
                  <BodyText color={theme.colors.textInverse} weight={theme.typography.weights.bold}>
                    {exercise.series} series
                  </BodyText>
                </View>
                <View style={styles.exerciseOutlinePill}>
                  <BodyText color={theme.colors.textSecondary} weight={theme.typography.weights.bold}>
                    {exercise.repeticoes} reps
                  </BodyText>
                </View>
              </View>
            </Card>
          ))}
        </View>
      </Card>
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
  selector: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  selectorItem: {
    flex: 1,
    minHeight: theme.sizes.buttonMinHeight,
    borderRadius: theme.radius.lg,
    borderWidth: theme.borders.thin,
    borderColor: theme.colors.cardBorder,
    backgroundColor: theme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.md,
  },
  selectorItemActive: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.transparent,
  },
  workoutCard: {
    gap: theme.spacing.lg,
  },
  workoutHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  workoutTitleBlock: {
    flex: 1,
    gap: theme.spacing.xs,
  },
  trainerBadge: {
    backgroundColor: theme.colors.accentSoft,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.radius.lg,
  },
  exerciseList: {
    gap: theme.spacing.md,
  },
  exerciseCard: {
    backgroundColor: theme.colors.surfaceDark,
    gap: theme.spacing.sm,
  },
  exerciseMeta: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  exercisePill: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  exerciseOutlinePill: {
    borderWidth: theme.borders.thin,
    borderColor: theme.colors.cardBorder,
    borderRadius: theme.radius.lg,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
});
