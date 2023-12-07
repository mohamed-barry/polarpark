import React from 'react';
import {Box, Footer, Placeholder, Section, ClickablePanel} from '@app/components';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProps} from '@app/navigation/types';

export default function Services(): JSX.Element {
  const mainNav = useNavigation<RootStackNavigationProps<'Main'>>();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Section title="Polar Park Features">
        <Box flex={1} flexDirection="row" mb="m">
          <ClickablePanel active={true} onPress={()=>{mainNav.navigate('Parking')}} imageSrc={require('@app/assets/images/green-island-garage.png')} text='Parking Map' mr="m" />
          <ClickablePanel active={true} onPress={()=>{mainNav.navigate('Seating')}} imageSrc={require('@app/assets/images/smiley-1.png')} text='Seating Map' />
        </Box>
        <Box flex={1} flexDirection="row">
          <Placeholder mr="m" />
          <Placeholder />
        </Box>
      </Section>
      <Section title="Accessibility">
        <Box flex={1} flexDirection="row" mb="m">
          <ClickablePanel active={true} onPress={()=>{mainNav.navigate('DevPage')}} imageSrc={{uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F266471.jpg&f=1&nofb=1&ipt=1dc6926d27dadbc406b8a46ac838257ed58c9c11563f73ffb212bacfbf2827ca&ipo=images"}} text="Dev" mr="m" />
          <ClickablePanel active={true} onPress={()=>{mainNav.navigate('InteractiveMap')}} imageSrc={{uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nationsonline.org%2Fmaps%2FPhysical-World-Map-3360.jpg&f=1&nofb=1&ipt=ead693192766731c5e76d69c1265c393bed1799e4c85f2b7570bd48399a4c989&ipo=images"}} text="Map" />
        </Box>
        <Box flex={1} flexDirection="row">
          <Placeholder mr="m" />
          <Placeholder />
        </Box>
      </Section>
      <Footer text="Have troubles accessing one of our services?" />
    </ScrollView>
  );
}
