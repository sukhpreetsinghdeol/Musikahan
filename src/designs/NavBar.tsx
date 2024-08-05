import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window');
const LikeScreen = () => {
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.bottomIconWrapper}>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="search-outline" size={35} color="#AB4DBA" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="home-outline" size={35} color="#AB4DBA" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <MaterialIcons name="library-music" size={35} color="#AB4DBA" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LikeScreen;

const styles = StyleSheet.create({
  bottomContainer: {
    width: width,
    alignItems: 'center',
    paddingVertical: 15,
    borderTopColor: '#393E46',
    borderWidth: 1,
  },

  bottomIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});
