import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RootStackNavigationProps} from '@app/navigation/types';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Services(): JSX.Element {
  const securityNav =
    useNavigation<RootStackNavigationProps<'SecurityServices'>>();
  const faqNav = useNavigation<RootStackNavigationProps<'FAQServices'>>();
  const parkingNav =
    useNavigation<RootStackNavigationProps<'ParkingServices'>>();
    const weatherNav =
    useNavigation<RootStackNavigationProps<'WeatherPolicy'>>();

  const navigateToSecurity = () => securityNav.navigate('SecurityServices');
  const navigateToFaq = () => faqNav.navigate('FAQServices');
  const navigateToParking = () => parkingNav.navigate('ParkingServices');
  const navigateToWeather = () => weatherNav.navigate('WeatherPolicy');

  const backgroundImage = require('@app/assets/images/smiley-1.png');

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.overlay}>
          <TouchableOpacity
            style={styles.boxContainer}
            onPress={navigateToSecurity}>
            <Text style={styles.boxText}>Security</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxContainer} onPress={navigateToFaq}>
            <Text style={styles.boxText}>Polar Park Fan Guide</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boxContainer}
            onPress={navigateToParking}>
            <Text style={styles.boxText}>Parking Map</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.boxContainer}
            onPress={navigateToWeather}>
            <Text style={styles.boxText}>Weather Policy</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // This adds a dark overlay to the background image
    paddingHorizontal: 20,
  },
  boxContainer: {
    flex: 1,
    backgroundColor: 'rgba(169, 7, 10, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 20,
    marginBottom: 0,
    height: 130,
    opacity: 0.8,
    fontFamily: 'Nunito Sans',
  },
  boxText: {
    color: 'white',
    fontWeight: '700',
    fontFamily: 'Nunito Sans',
    fontSize: 30,
  },
});
