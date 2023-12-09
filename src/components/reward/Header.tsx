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
    width: 400,
    height: 160,
    resizeMode: 'contain',
  },
});

export default Header;
