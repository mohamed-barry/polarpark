import React from 'react';
import {Box, Icon, Text} from '@app/components';
import {Pressable, ScrollView} from 'react-native';
import {RootStackScreenProps} from '@app/navigation/types';

interface ListItemWrapperProps {
  onPress: () => void;
  title: string;
}

function ListItemWrapper({onPress, title}: ListItemWrapperProps): JSX.Element {
  return (
    <Pressable onPress={onPress}>
      <Box
        alignItems="center"
        flexDirection="row"
        height={48}
        px="l"
        justifyContent="space-between">
        <Text fontWeight="bold" variant="body">
          {title}
        </Text>
        <Icon name="chevron-right" size={24} color="black" />
      </Box>
    </Pressable>
  );
}

export default function Settings(
  props: RootStackScreenProps<'Settings'>,
): JSX.Element {
  const {navigation} = props;

  const navigateToChangeUsername = () => navigation.navigate('ChangeUsername');
  const navigateToChangePassword = () => navigation.navigate('ChangePassword');

  return (
    <Box bg="mainBackground" height="100%">
      <ScrollView>
        <ListItemWrapper
          title="Change Username"
          onPress={navigateToChangeUsername}
        />
        <ListItemWrapper
          title="Change Password"
          onPress={navigateToChangePassword}
        />
        <ListItemWrapper title="Payment" onPress={navigateToChangeUsername} />
        <ListItemWrapper
          title="Notification Settings"
          onPress={navigateToChangeUsername}
        />
        <ListItemWrapper title="Privacy" onPress={navigateToChangeUsername} />
        <ListItemWrapper title="Languages" onPress={navigateToChangeUsername} />
        <ListItemWrapper title="Sounds" onPress={navigateToChangeUsername} />
        <ListItemWrapper
          title="Location Services"
          onPress={navigateToChangeUsername}
        />
      </ScrollView>
    </Box>
  );
}
