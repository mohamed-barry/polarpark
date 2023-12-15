import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import Header from '@app/components/reward/Header';
import {NavigationProp} from '@react-navigation/native';
import TextField from '@app/components/reward/TextField';
import Dropdown from '@app/components/reward/DropDown';
import Confirmation from './Confirmation';
import {SignUpParams, signUp} from '@app/api/features/rewardsSignup';

interface Props {
  navigation: NavigationProp<any>;
}

const Signup: React.FC<Props> = ({navigation}) => {
  const defaultUserParams: SignUpParams = {
    first_name: '',
    last_name: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: '',
    phoneNumber: '',
  };

  const [stage, setStage] = useState(1);
  const [userParams, setUserParams] = useState(defaultUserParams);

  const handleContinueClick = (sup: SignUpParams) => {
    setUserParams(sup);
    setStage(2);
  };

  const handleLoginClick = () => {
    navigation.navigate('Login');
  };

  const handleSignUpClick = (email: string, password: string) => {
    signUp(email, password, userParams)
      .then(success => {
        if (success) {
          navigation.navigate('CongratSignUp');
        } else {
          Alert.alert('Unable to make account');
        }
      })
      .catch(e => {
        Alert.alert('Unable to make account', e.message);
      });
  };

  return (
    <>
      {stage == 1 ? (
        <UserInfo
          handleContinueClick={handleContinueClick}
          handleLoginClick={handleLoginClick}
        />
      ) : (
        <Confirmation
          handleLoginClick={handleLoginClick}
          handleSignUpClick={handleSignUpClick}
        />
      )}
    </>
  );
};

type UserInfoProps = {
  handleContinueClick: (up: SignUpParams) => void;
  handleLoginClick: () => void;
};

type FormError = {
  showError: boolean;
  errorMsg: string;
};

function UserInfo({
  handleContinueClick,
  handleLoginClick,
}: UserInfoProps): JSX.Element {
  const stateAbbreviations = [
    'Alabama', // Alabama
    'Alaska', // Alaska
    'Arizona', // Arizona
    'Arkansas', // Arkansas
    'California', // California
    'Colorado', // Colorado
    'Connecticut', // Connecticut
    'Delaware', // Delaware
    'District of Columbia',
    'Florida', // Florida
    'Georgia', // Georgia
    'Hawaii', // Hawaii
    'Idaho', // Idaho
    'Illinois', // Illinois
    'Indiana', // Indiana
    'Iowa', // Iowa
    'Kansas', // Kansas
    'Kentucky', // Kentucky
    'Louisiana', // Louisiana
    'Maine', // Maine
    'Maryland', // Maryland
    'Massachusetts', // Massachusetts
    'Michigan', // Michigan
    'Minnesota', // Minnesota
    'Mississippi', // Mississippi
    'Missouri', // Missouri
    'Montana', // Montana
    'Nebraska', // Nebraska
    'Nevada', // Nevada
    'New Hampshire', // New Hampshire
    'New Jersey', // New Jersey
    'New Mexico', // New Mexico
    'New York', // New York
    'North Carolina', // North Carolina
    'North Dakota', // North Dakota
    'Ohio', // Ohio
    'Oklahoma', // Oklahoma
    'Oregon', // Oregon
    'Pennsylvania', // Pennsylvania
    'Rhode Island', // Rhode Island
    'South Carolina', // South Carolina
    'South Dekota', // South Dakota
    'Tennessee', // Tennessee
    'Texas', // Texas
    'Utah', // Utah
    'Vermont', // Vermont
    'Virginia', // Virginia
    'Washington', // Washington
    'West Virginia', // West Virginia
    'Wisconsin', // Wisconsin
    'Wyoming', // Wyoming
    'Armed Forces',
    'American Samoa',
    'Micronesia',
    'Guam',
    'Marshall Islands',
    'Northern Mariana Islands',
    'Palau',
    'Puerto Rico',
    'US Virgin Islands',
  ];

  const genders = ['Male', 'Female', 'Other'];

  const races = [
    'African American',
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

  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState<string | undefined>(undefined);
  const [race, setRace] = useState<string | undefined>(undefined);
  const [marital, setMarital] = useState<string | undefined>(undefined);
  const [errorMsg, setErrorMsg] = useState<FormError>({
    showError: false,
    errorMsg: '',
  });

  const continueClick = () => {
    if (fname == '') {
      setErrorMsg({
        showError: true,
        errorMsg: 'You must provide a first name',
      });
    } else if (lname == '') {
      setErrorMsg({
        showError: true,
        errorMsg: 'You must provide a last name',
      });
    } else if (address1 == '' || city == '' || state == '' || zipcode == '') {
      setErrorMsg({
        showError: true,
        errorMsg: 'Check you address',
      });
    } else if (phoneNumber != '' && !/[- +()0-9]+/.test(phoneNumber)) {
      setErrorMsg({
        showError: true,
        errorMsg: 'Check your phone number',
      });
    } else {
      const userParams: SignUpParams = {
        first_name: fname,
        last_name: lname,
        address1,
        address2,
        city,
        state,
        zipcode,
        phoneNumber,
        gender,
        race,
        marital,
      };
      handleContinueClick(userParams);
    }
  };

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
        <TextField placeholder="First name" value={fname} onChange={setFName} />
        <Text style={styles.label}>Last Name</Text>
        <TextField placeholder="Last name" value={lname} onChange={setLName} />
        <Text style={styles.label}>Address</Text>
        <TextField
          placeholder="Address Line 1"
          value={address1}
          onChange={setAddress1}
        />
        <TextField
          placeholder="Address Line 2"
          value={address2}
          onChange={setAddress2}
        />
        <View style={styles.stateCityContainer}>
          <View style={styles.stateInput}>
            <Text style={styles.label}>State</Text>

            <Dropdown contents={stateAbbreviations} onChange={setState} />
          </View>
          <View style={styles.cityInput}>
            <Text style={styles.label}>City</Text>
            <TextField placeholder="City" value={city} onChange={setCity} />
          </View>
        </View>
        <Text style={styles.label}>Zip Code</Text>
        <TextField
          placeholder="Enter your zipcode"
          value={zipcode}
          onChange={setZipcode}
        />
        <Text style={styles.label}>Phone Number (Optional)</Text>
        <TextField
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={setPhoneNumber}
        />
        <Text style={styles.label}>Gender (Optional)</Text>
        <Dropdown contents={genders} onChange={setGender} />
        <Text style={styles.label}>Race (Optional)</Text>
        <Dropdown contents={races} onChange={setRace} />
        <Text style={styles.label}>Marital Status (Optional)</Text>
        <Dropdown contents={maritalStatus} onChange={setMarital} />

        {errorMsg.showError && (
          <View style={[styles.redeemBox]}>
            <Text>{errorMsg.errorMsg}</Text>
          </View>
        )}

        {/* <Text style={styles.label}>Phone Number</Text>
        <TextField placeholder="Enter your phone number" /> */}
        <TouchableOpacity style={styles.button} onPress={continueClick}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

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
  redeemBox: {
    width: '100%',
    backgroundColor: 'lightcoral',
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Signup;
