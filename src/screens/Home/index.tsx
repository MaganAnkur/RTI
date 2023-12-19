import {MoviesList} from 'components/templates/MoviesList';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <MoviesList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
