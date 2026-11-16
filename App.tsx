import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { formatBuildLabel, Variant } from './src/buildInfo';

const extra = Constants.expoConfig?.extra ?? {};
const variant = (extra.variant ?? 'dev') as Variant;
const version = Constants.expoConfig?.version ?? '0.0.0';
const buildNumber = String(extra.buildNumber ?? '1');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Constants.expoConfig?.name}</Text>
      <Text>{formatBuildLabel(variant, version, buildNumber)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
});
