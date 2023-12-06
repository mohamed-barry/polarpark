import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Header from '@app/components/reward/Header';
import {NavigationProp} from '@react-navigation/native';
import TextField from '@app/components/reward/TextField';
import Dropdown from '@app/components/reward/DropDown';

interface Props {
  navigation: NavigationProp<any>;
}

const Signup: React.FC<Props> = ({navigation}) => {
  const handleContinueClick = () => {
    navigation.navigate('Confirmation');
  };

  const handleLoginClick = () => {
    navigation.navigate('Login');
  };

  const stateAbbreviations = [
    'AL', // Alabama
    'AK', // Alaska
    'AZ', // Arizona
    'AR', // Arkansas
    'CA', // California
    'CO', // Colorado
    'CT', // Connecticut
    'DE', // Delaware
    'FL', // Florida
    'GA', // Georgia
    'HI', // Hawaii
    'ID', // Idaho
    'IL', // Illinois
    'IN', // Indiana
    'IA', // Iowa
    'KS', // Kansas
    'KY', // Kentucky
    'LA', // Louisiana
    'ME', // Maine
    'MD', // Maryland
    'MA', // Massachusetts
    'MI', // Michigan
    'MN', // Minnesota
    'MS', // Mississippi
    'MO', // Missouri
    'MT', // Montana
    'NE', // Nebraska
    'NV', // Nevada
    'NH', // New Hampshire
    'NJ', // New Jersey
    'NM', // New Mexico
    'NY', // New York
    'NC', // North Carolina
    'ND', // North Dakota
    'OH', // Ohio
    'OK', // Oklahoma
    'OR', // Oregon
    'PA', // Pennsylvania
    'RI', // Rhode Island
    'SC', // South Carolina
    'SD', // South Dakota
    'TN', // Tennessee
    'TX', // Texas
    'UT', // Utah
    'VT', // Vermont
    'VA', // Virginia
    'WA', // Washington
    'WV', // West Virginia
    'WI', // Wisconsin
    'WY', // Wyoming
  ];

  const genders = ['Male', 'Female', 'Other'];

  const races = [
    'African',
    'Asian',
    'Caucasian',
    'Hispanic',
    'Middle Eastern',
    'Native American',
    'Pacific Islander',
    'Mixed Race',
    'Other',
  ];

  const maritalStatus = [
    'Single',
    'Married',
    'Divorced',
    'Widowed',
    'Separated',
    'Registered partnership',
    'Civil union',
    'Domestic partnership',
    'Unmarried partners',
    'Cohabiting',
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to WooSox Rewards</Text>
        <TouchableOpacity onPress={handleLoginClick}>
          <Text style={styles.loginText}>
            Already signed up? <Text style={styles.loginLink}>Log in</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextField placeholder="Enter your first name" />
        <Text style={styles.label}>Last Name</Text>
        <TextField placeholder="Enter your last name" />
        <Text style={styles.label}>Address</Text>
        <TextField placeholder="Enter your address" />
        <View style={styles.stateCityContainer}>
          <View style={styles.stateInput}>
            <Text style={styles.label}>State</Text>
            <Dropdown contents={stateAbbreviations} />
          </View>
          <View style={styles.cityInput}>
            <Text style={styles.label}>City</Text>
            <TextField placeholder="City" />
          </View>
        </View>
        <Text style={styles.label}>Zip Code</Text>
        <TextField placeholder="Enter your zipcode" />
        <Text style={styles.label}>Gender (Optional)</Text>
        <Dropdown contents={genders} />
        <Text style={styles.label}>Race</Text>
        <Dropdown contents={races} />
        <Text style={styles.label}>Marital Status</Text>
        <Dropdown contents={maritalStatus} />
        <Text style={styles.label}>Phone Number</Text>
        <TextField placeholder="Enter your phone number" />

        <Text style={styles.label}>Phone Number</Text>
        <TextField placeholder="Enter your phone number" />
        <TouchableOpacity style={styles.button} onPress={handleContinueClick}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    fontFamily: 'Nunito Sans',
  },
  loginText: {
    marginBottom: 20,
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
  },
  loginLink: {
    color: 'rgba(169, 7, 10, 1)',
    fontWeight: 'bold',
    fontFamily: 'Nunito Sans',
  },
  inputContainer: {
    width: '100%',
  },
  label: {
    marginBottom: 8,
    fontFamily: 'Nunito Sans',
    fontWeight: '500',
    fontSize: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 2,
    padding: 10,
    marginBottom: 10,
    fontFamily: 'Nunito Sans',
  },
  stateCityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  stateInput: {
    flex: 2,
    marginRight: 10,
  },
  cityInput: {
    flex: 2,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 20,
    alignSelf: 'flex-end',
    borderColor: 'rgba(169, 7, 10, 1)',
    borderWidth: 3,
  },
  buttonText: {
    color: 'rgba(169, 7, 10, 1)',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Nunito Sans',
  },
  scrollViewContent: {
    width: '100%',
  },
  contentContainer: {
    padding: 10,
  },
  textField: {
    marginBottom: 10,
  },
});

export default Signup;
