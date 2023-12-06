/* eslint-disable react/react-in-jsx-scope */
import {Image, StyleSheet, View} from 'react-native';
import Logo from '@app/assets/images/woosox-rewards-nobg.png';
const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Image source={Logo} style={styles.headerImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgb(16,41,89)',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    width: 430,
  },
  headerImage: {
    width: 400, // Adjust the width of the image
    height: 160, // Adjust the height of the image
    resizeMode: 'contain', // Adjust the image content mode as needed
  },
  // Add more styles as needed for your header
});

export default Header;
