import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import Header from '@app/components/reward/RewardHeader';
import Home from '@app/assets/icons/rewards/blue-home.png';

interface Props {
  navigation: any;
}

const FAQ: React.FC<Props> = ({navigation}) => {
  const [expandedBox, setExpandedBox] = useState<number | null>(null);

  const toggleBox = (index: number) => {
    if (expandedBox === index) {
      setExpandedBox(null);
    } else {
      setExpandedBox(index);
    }
  };

  const handleIconClick = () => {
    navigation.navigate('Dashboard');
  };

  const boxes = [
    {
      title: 'What is WooSox Rewards?',
      content:
        'WooSox Rewards, presented by Window World, is the newest official fan loyalty program of the Worcester Red Sox! The program allows WooSox Rewards members to earn and spend points on unique prizes and priceless experiences! WooSox Rewards aims to enhance the fan experience and integrate facets of the ballpark experience into one, easy-to-use mobile experience.',
    },
    {
      title: 'What happens to the Booster Club and WooU programs?',
      content:
        'Members of the Worcester Red Sox Booster Club and WooU Student Loyalty Program are automatically enrolled in WooSox Rewards. Existing members available points will automatically transfer into their WooSox Rewards accounts. Existing and new users can also visit woosoxrewards.com to join/login/view their accounts',
    },
    {
      title: 'How do WooSox Rewards members earn points?',
      content:
        'There are a variety of ways to earn points! The most consistent way for members to earn points includes attending games and purchasing food and beverages. Keep an eye out for games and events with special point values! Special offers, punchcards at events, and promo codes will also be released frequently throughout the season.',
    },
    {
      title: 'How do WooSox Rewards memberships work?',
      content:
        'Three tiers of membership, based on the number of points amassed each year, include gifts and benefits for crossing various point thresholds. Leadoff Hitters receive Bronze Cards and a welcome as the WooSox Rewards Member of the Game after reaching 1,000 points. All-Star Members receive Silver Cards and a free WooSox Rewards cap when crossing the 3,000-point threshold. Hall of Fame Members receive Gold Cards and a free WooSox Rewards t-shirt and recognition in a pre-game ceremony on the field after crossing the 5,000-point threshold.',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header rightImage={Home} onRightImageClick={handleIconClick} />
      <Text style={styles.faqText}>FAQ</Text>
      {boxes.map((box, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.box,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              borderRadius: 10,
              backgroundColor: 'rgb(16,41,89)',
              marginBottom: 7,
            },
            // eslint-disable-next-line react-native/no-inline-styles
            expandedBox === index && {height: 300, padding: 15}, // Expanded box height and padding
          ]}
          onPress={() => toggleBox(index)}>
          <Text style={styles.boxTitle}>{box.title}</Text>
          {expandedBox === index && (
            <Text style={styles.boxContent}>{box.content}</Text>
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  box: {
    width: 370,
    marginRight: 20,
    marginLeft: 20,
    paddingLeft: 7,
    paddingTop: 7,
    backgroundColor: 'rgb(16,41,89)',
  },
  faqText: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    fontFamily: 'Nunito Sans',
  },
  boxTitle: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
    marginBottom: 10,
  },
  boxContent: {
    fontFamily: 'Nunito Sans',
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
  },
});

export default FAQ;
