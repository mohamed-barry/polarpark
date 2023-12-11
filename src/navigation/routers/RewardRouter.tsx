import 'react-native-gesture-handler';
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '@app/screens/Rewards/Login';
import Signup from '@app/screens/Rewards/Signup';
import Dashboard from '@app/screens/Rewards/Dashboard';
import RewardList from '@app/screens/Rewards/Rewards';
import CongratReward from '@app/screens/Rewards/CongratReward';
import CongratSignUp from '@app/screens/Rewards/CongratSignUp';
import FAQ from '@app/screens/Rewards/FAQ';
import Redeem from '@app/screens/Rewards/Reedem';
import LeaderBoard from '@app/screens/Rewards/LeaderBoard';
import PrivacyPolicy from '@app/screens/Rewards/PrivacyPolicy';
import CrowdCameo from '@app/screens/Rewards/CrowdCameo';
import ForgotPassword from '@app/screens/Rewards/ForgotPassword';
import CodeVerification from '@app/screens/Rewards/CodeVerification';
import ResetPassword from '@app/screens/Rewards/ResetPassword';
import Settings from '@app/screens/Rewards/Settings';
import ChangePassword from '@app/screens/Rewards/Settings/ChangePassword';
import UploadProfilePhoto from '@app/screens/Rewards/Settings/UploadProfilePhoto';
import UpdateAccountInfo from '@app/screens/Rewards/Settings/UpdateAccountInfo';

const Stack = createNativeStackNavigator();

const RewardRouter: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="RewardList" component={RewardList} />
      <Stack.Screen name="CongratReward" component={CongratReward} />
      <Stack.Screen name="CongratSignUp" component={CongratSignUp} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="Redeem" component={Redeem} />
      <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="CrowdCameo" component={CrowdCameo} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="CodeVerification" component={CodeVerification} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="AccountSettings" component={Settings} />
      <Stack.Screen name="PasswordSettings" component={Settings} />
      <Stack.Screen name="ProfileSettings" component={Settings} />
      <Stack.Screen name="Setting" component={Settings} />
      <Stack.Screen name="UpdateAccountInfo" component={UpdateAccountInfo} />
      <Stack.Screen name="UploadProfilePhoto" component={UploadProfilePhoto} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
};

export default RewardRouter;
