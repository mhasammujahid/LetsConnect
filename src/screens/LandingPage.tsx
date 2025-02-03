import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
import {LandingPageProps} from '../types';

const LandingPage: React.FC<LandingPageProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/images/landing_page.png')} />
      </View>
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require('../assets/images/app_logo.png')}
        />
        <Text style={styles.title}>Book your haircut {'\n'} in seconds</Text>
        <Text style={styles.subtitle}>
          Schedule your next haircut within a few seconds. Easily reserve and
          manage your appointments.
        </Text>
        <View style={styles.buttonTop}>
          <Button
            title="Log in"
            color="#191A1A"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
        <View style={styles.buttonBottom}>
          <Button title="Register" color="#191A1A" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    experimental_backgroundImage: 'linear-gradient(to bottom, #fff, #fff)',
  },
  logo: {
    marginTop: -125,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 40,
    color: '#191A1A',
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    color: '#888888',
  },
  buttonTop: {
    marginTop: 45,
    width: 300,
    borderRadius: 10,
  },
  buttonBottom: {
    marginTop: 20,
    width: 300,
    borderRadius: 10,
  },
});

export default LandingPage;
