// src/components/WelcomePage.js
import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const WelcomePage = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Ensure 'SignUp' matches the screen name in your navigator
      navigation.navigate('SignUp');
    }, 4000); // Adjust the delay as needed

    // Clean up timer on component unmount
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#171123', '#372248']} // Verify gradient colors
      style={styles.container}>
      <Image
        source={require('../assets/images/welcome.png')} // Verify the image path
        style={styles.logo}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ensures the image covers the screen while maintaining aspect ratio
  },
});

export default WelcomePage;
