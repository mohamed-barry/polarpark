import React from 'react';
import IconButton from '@app/components/general/IconButton/IconButton';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from '@app/navigation/types';
import SvgIcon from '../../SvgIcon/SvgIcon';
import SettingsIcon from "@app/assets/icons/settings-icon.svg"

export default function HomeOptions(): JSX.Element {
  const navigation = useNavigation<RootStackNavigationProps<'Main'>>();

  const navigateToSettings = () => navigation.navigate('Settings');

  return (
    <>
      <SvgIcon SVG={SettingsIcon} focused={true} size={24} onPress={navigateToSettings}/>
    </>
  );
}
