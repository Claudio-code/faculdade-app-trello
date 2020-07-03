import * as React from 'react';

import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Todo from './src/page';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
      <SafeAreaView  style={{ flex: 1, paddingTop: '5%' }}>
        <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen name="A fazer" component={Todo} initialParams={{
                current: 'todo',
                next: 'doing'
              }} />
              <Tab.Screen name="Em andamento" component={Todo} initialParams={{
                current: 'doing',
                next: 'done'
              }} />
              <Tab.Screen name="Concluído" component={Todo} initialParams={{
                current: 'done',
                next: null
              }} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
  );
}