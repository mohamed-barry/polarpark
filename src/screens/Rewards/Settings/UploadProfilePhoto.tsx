// UploadProfilePhoto.tsx
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import Header from '@app/components/reward/RewardHeader';
import Home from '@app/assets/icons/rewards/blue-home.png';

interface Props {
  navigation: any;
}

const UploadProfilePhoto: React.FC<Props> = ({navigation}) => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleIconClick = () => {
    navigation.navigate('Dashboard');
  };

  const handlePickImage = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else if (response.assets) {
        const source = response.assets[0].uri;
        setImageUri(source);
      }
    });
  };

  const handleTakePhoto = () => {
    const options = {
      mediaType: 'photo',
      cameraType: 'back',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
      includeBase64: false,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera picker');
      } else if (response.errorCode) {
        console.log('Camera Error: ', response.errorCode);
      } else if (response.assets) {
        const source = response.assets[0].uri;
        setImageUri(source);
      }
    });
  };

  return (
    <View style={{flex: 1}}>
      <Header rightImage={Home} onRightImageClick={handleIconClick} />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {imageUri ? (
            <Image source={{uri: imageUri}} style={styles.image} />
          ) : (
            <Text style={styles.imagePlaceholder}>Your Profile Photo</Text>
          )}
        </View>
        <TouchableOpacity style={styles.button} onPress={handlePickImage}>
          <Text style={styles.buttonText}>Pick an Image from Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
          <Text style={styles.buttonText}>Take a Photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1e4e8',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  imagePlaceholder: {
    color: '#4f4f4f',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#0066cc',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default UploadProfilePhoto;
