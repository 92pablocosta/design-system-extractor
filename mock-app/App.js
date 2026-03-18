import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomTabBar } from './src/components/BottomTabBar';
import { ClassesScreen } from './src/screens/ClassesScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { WorkoutsScreen } from './src/screens/WorkoutsScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { key: 'profile', label: 'Perfil' },
    { key: 'workouts', label: 'Treinos' },
    { key: 'classes', label: 'Aulas' },
  ];

  const screens = {
    profile: <ProfileScreen />,
    workouts: <WorkoutsScreen />,
    classes: <ClassesScreen />,
  };

  return (
    <View style={styles.app}>
      {screens[activeTab]}
      <BottomTabBar tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
