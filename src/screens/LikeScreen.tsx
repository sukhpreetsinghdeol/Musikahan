import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {iconSize} from '../designs/dimensions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {spacing} from '../designs/dimensions';
import Songs from '../designs/Songs';
import NavBar from '../designs/NavBar';
import FloatingPlayer from '../designs/FloatingPlayer';
import {SafeAreaView} from 'react-native-safe-area-context';

const LikeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={iconSize.lg} color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="grip-lines" color="white" size={iconSize.lg} />
        </TouchableOpacity>
      </View>
      <FlatList
        ListHeaderComponent={
          <Text style={styles.headingText}>Liked Songs</Text>
        }
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={() => (
          <Songs
            containerStyle={{width: '47%'}}
            imageStyle={{
              height: 160,
              width: 160,
              borderRadius: 7,
            }}
          />
        )}
        numColumns={2}
        contentContainerStyle={{
          paddingBottom: 500,
          paddingHorizontal: spacing.lg,
        }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginVertical: spacing.lg,
        }}
      />
      <FloatingPlayer />
      <NavBar />
    </SafeAreaView>
  );
};

export default LikeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14121F',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.md,
  },
  headingText: {
    fontSize: 23,
    color: 'white',
    textAlign: 'center',
  },
});
