import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {spacing} from './dimensions';
import Songs from './songs';

const SongCategories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Discover more with Musikahan</Text>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        renderItem={Songs}
        horizontal={true}
        ItemSeparatorComponent={<View style={{marginHorizontal: -25}} />}
        contentContainerStyle={{
          paddingHorizontal: spacing.sm,
          paddingVertical: spacing.sm,
        }}
      />
    </View>
  );
};

export default SongCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingText: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: spacing.lg,
  },
});
