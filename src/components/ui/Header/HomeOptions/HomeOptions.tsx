import React from 'react';
import IconButton from '@app/components/general/IconButton/IconButton';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from '@app/navigation/types';

export default function HomeOptions(): JSX.Element {
  const navigation = useNavigation<RootStackNavigationProps<'Main'>>();

  const navigateToSettings = () => navigation.navigate('Settings');

  return (
    <>
      <IconButton name="user" onPress={() => {}} mr="s" />
      <IconButton name="settings" onPress={navigateToSettings} />
    </>
  );
}
