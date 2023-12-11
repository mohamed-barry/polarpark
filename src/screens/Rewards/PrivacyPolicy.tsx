import React from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';
import Header from '@app/components/reward/RewardHeader';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Home from '@app/assets/icons/rewards/blue-home.png';

interface Props {
  navigation: any;
}

const PrivacyPolicy: React.FC<Props> = ({navigation}) => {
  const handleAcceptClick = () => {
    navigation.navigate('Dashboard');
  };
  const handleDeclineClick = () => {
    navigation.navigate('Login');
  };
  const handleIconClick = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <ScrollView style={styles.container}>
      <Header rightImage={Home} onRightImageClick={handleIconClick} />
      <Text style={styles.title}> Terms of Service</Text>
      <ScrollView style={styles.scrollableView}>
        <Text style={styles.sectionTitle}>
          1. Program Participation and Eligibility
        </Text>
        <Text>
          Participation in the WooSox Rewards Program (the "Program"), and use
          of the Program membership card ("Membership Card") issued by the
          Worcester Red Sox Baseball Club, LLC (the "Club") are subject to these
          terms and conditions, and the rules, regulations, policies, and
          procedures described herein, on the Membership Card, on
          woosoxrewards.com, in the WooSox Rewards application available on
          mobile devices and managed by third party vendor FanMaker (the “App”)
          or otherwise communicated to Members (as defined below) (collectively,
          "Program Terms"). The Club has the right to change, limit, or
          otherwise amend the Program Terms at any time in its discretion by
          posting them on woosoxrewards.com?and in the App, by e-mail
          notification to each Member, or both, and reserves the right to cancel
          the Program at any time. Anyone, subject to the restrictions herein,
          is eligible to join and participate in the Program (each, a "Member").
          Employees of the Club and its affiliates are eligible to participate
          in the Program but may redeem their Points (as defined below) only for
          Rewards available to employees, which the Club may limit and change at
          any time in its sole discretion.{' '}
        </Text>
        <Text style={styles.sectionTitle}>
          2. Program Enrollment, Rewards Card
        </Text>
        <Text>
          The Club will issue one (1) Membership Card for each Member. This card
          will be issued digitally through the App. Physical Membership Cards
          are available upon request.
        </Text>
        <Text style={styles.sectionTitle}>3. Children's Privacy</Text>
        <Text>
          Members must be at least thirteen (13) years old to be eligible to
          participate in the Program. Consistent with the FanMaker Privacy
          Policy, available at woosoxrewards.com/privacy and on the App, neither
          the Club nor FanMaker will knowingly accept personal information about
          any individual under the age of 13. Certain Rewards (e.g., Rewards
          including travel) as determined by the Club in its sole discretion are
          only available to Members over the age of eighteen (18) years old.
        </Text>
        <Text style={styles.sectionTitle}>4. Use of Membership Card</Text>
        <Text>
          Use of the Membership Card so issued will enroll the Member named on
          such Membership Card in the Program, subject to and in accordance with
          all of the Program Terms. Each Member is solely responsible for
          controlling access to his or her Membership Card, and is liable for
          all activities conducted with such Membership Card bearing the
          Member’s name, whether or not such activities are conducted by the
          Member. The Club is not responsible for unauthorized access to a
          Member’s Membership Card or unauthorized uses thereof. Membership
          Cards may not be transferred, sold, assigned, or otherwise encumbered.
          Each Membership Card will have an associated Program account ("Program
          Account") at woosoxrewards.com and on the App for the management of
          such Membership Card and its associated Program benefits as described
          below.
        </Text>
        <Text style={styles.sectionTitle}>5. Points & Rewards</Text>
        <Text>
          Members acknowledge that Member activities related to Worcester Red
          Sox games, other events at Polar Park, located at 100 Madison Street,
          Worcester, MA 01608 (“Polar Park”), and certain events at other
          locations are tracked to accumulate rewards points ("Points"). An
          explanation of how Points may be earned and redeemed for certain
          rewards ("Rewards"), including a description of the Rewards and rules
          for transferring, retaining, and forfeiting Points, may be found on
          woosoxrewards.com and in the App. Rewards may only be earned and
          selected by accumulating the applicable Point value(s) specified
          on?woosoxrewards.com and on the App. Points may not be used for any
          purpose other than to redeem Rewards. Points and Rewards cannot be
          redeemed for cash at any time, have no cash value at any time, and
          cannot be combined with any other ticket or promotional offer of the
          Club or any third party. Points and Rewards may not be transferred
          (except as expressly set forth in the Program Terms), sold, or
          assigned by any means, electronic or otherwise. The Club reserves the
          right to revoke and not honor any Rewards or Points for which attempts
          have been made to transfer, sell, or assign. The Club is not
          responsible for Rewards lost, misdirected, or delayed via mail or over
          email, nor does it guarantee timely Rewards delivery. The Club is not
          responsible for unauthorized Point redemption activity. The Points
          required for any Rewards is determined by the Club. The Club reserves
          the right at any time to change Point values associated with any
          Rewards; to limit, modify, or cancel any Rewards or the number and
          type of Rewards available; and to change rules for earning, redeeming,
          retaining, or forfeiting Points. The Club reserves the right to limit
          or modify the quantity of certain Rewards available, and all Rewards
          remain subject to availability. Fulfillment of claimed Rewards will be
          managed by the Club and its representatives, in their sole discretion.
        </Text>
        <Text style={styles.sectionTitle}>Additional Terms and Conditions</Text>
        <Text>
          Membership Cards, Points, and Rewards are not refundable,
          exchangeable, replaceable or transferable unless specifically
          permitted by these Program Terms. The Club is not responsible, and
          shall not be held liable, for misdirected Membership Cards, Points, or
          Rewards and any unauthorized activities related to Membership Cards,
          Points or Rewards due to erroneous or outdated personal information in
          a Program Account. The Club is not responsible, and shall not be held
          liable, for any security breaches by any third party, including
          without limitation related to unauthorized activities related to the
          Program, Membership Cards, Points or Rewards. Members are solely
          responsible for any tax liability arising out of earning or redeeming
          Points and the use of Rewards. By participating in the Program, each
          Member agrees that the Club and its affiliates, subsidiaries,
          successors, and assigns (i) have the unrestricted right and license to
          use Member’s image, likeness, name, voice, comments, and/or other
          proprietary or public rights in any live or recorded broadcast,
          telecast, photograph, video, audio, audiovisual, and/or other
          recording taken in connection with the Program or at Polar Park, for
          all purposes, worldwide, in perpetuity, and in any and all media now
          or hereafter known, without compensation; (ii) have the unrestricted
          right and license to use any photos submitted by Member for display at
          Polar Park and/or on the Program website, for all purposes, worldwide,
          in perpetuity, and in any and all media now or hereafter known,
          without compensation; and (iii) may use, without notice, Member’s
          first name and last initial in any publicly-available listing of the
          Program leaderboard. For clarity, Club shall have the unrestricted
          right to use photos submitted by a Member in connection with the
          Program, whether through the App or otherwise. Members and their
          guests shall at all times abide by all applicable governmental laws,
          ordinances, orders, directions, rules and regulations, health and
          safety protocols, including but not limited to any masking, health
          check or vaccination requirements, and all Club policies, rules and
          regulations, including any resale price restrictions, smoking
          prohibitions and restrictions on entry to Polar Park. The Club may
          refuse admission to, or eject from Polar Park, any Membership Card
          holder without refund if the Membership Card holder fails to comply
          with any applicable Club policies applicable to conduct at Polar Park
          (including health and safety protocols) or is deemed to be disorderly.
          Inappropriate behavior, abusive language, or interference with the
          play of the game may result in ejection from Polar Park (without
          refund), arrest, forfeiture of ticket privileges and other legal
          action. In case of violation of applicable laws, regulations or the
          Program Terms, or fraud or abuse involving the Program, (i) the Club
          will have the right to take appropriate administrative and/or legal
          action, including but not limited to revocation/cancellation of
          Membership Cards, Points and Rewards and (ii) Members will be liable
          for payment of all fines, penalties, costs, fees and any other monies
          owed pursuant to the Program Terms and any applicable law, including,
          without limitation, any such fines, penalties, liabilities, costs or
          fees incurred by the Club or its affiliates as result thereof. If any
          term of these Program Terms is held to be unlawful or unenforceable,
          then the Club and/or the Member, as applicable, shall be relieved of
          such unlawful or unenforceable obligation and the remaining provisions
          will be enforced to the fullest extent permitted by law. Awarding of
          Rewards is void where prohibited by law.
        </Text>
        <Text style={styles.bold}>
          THE CLUB, FANMAKER, THE WORCESTER REDEVELOPMENT AGENCY, THE CITY OF
          WORCESTER, EACH OF THE MINOR LEAGUE BASEBALL ENTITIES (AS DEFINED IN
          THE WOOSOX.COM TERMS OF USE), AND EACH OF THEIR RESPECTIVE AFFILIATED
          ENTITIES, AGENTS, LICENSEES, VENDORS, MEMBERS, OFFICERS, DIRECTORS,
          EMPLOYEES, INDEPENDENT CONTRACTORS, AND REPRESENTATIVES (COLLECTIVELY,
          THE "RELEASED PARTIES") WILL HAVE NO LIABILITY OR RESPONSIBILITY
          WHATSOEVER FOR, AND SHALL BE HELD HARMLESS BY ANY AND ALL MEMBERS AND
          THEIR AUTHORIZED USERS AGAINST ANY LIABILITY FOR ANY INJURIES, LOSSES
          OR DAMAGES OF ANY KIND (INCLUDING WITHOUT LIMITATION, DIRECT,
          INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE OR EXEMPLARY DAMAGES)
          TO PERSONS, INCLUDING PERSONAL INJURY OR DEATH OR CONTRACTION OF
          COMMUNICABLE DISEASES (INCLUDING COVID-19) OR PROPERTY, ARISING IN
          WHOLE OR IN PART, DIRECTLY OR INDIRECTLY, FROM ACCEPTANCE, POSSESSION,
          MISUSE OR USE OF A REWARD, AND/OR PARTICIPATING IN THE PROGRAM,
          PROGRAM-RELATED ACTIVITIES (INCLUDING WITHOUT LIMITATION PARTICIPATION
          IN THE ECASH FUNCTIONALITY) AND/OR REWARD-RELATED ACTIVITIES. THE
          RELEASED PARTIES ARE NOT RESPONSIBLE IF ANY REWARD CANNOT BE AWARDED
          FOR ANY REASON. IN NO EVENT SHALL THE RELEASED PARTIES BE LIABLE FOR
          ANY DELAY IN OR FAILURE TO PERFORM DUE TO CAUSES BEYOND THE RELEASED
          PARTIES' CONTROL, INCLUDING, WITHOUT LIMITATION, ANY ACT OF GOD, ACT
          OF WAR, STRIKE, LOCKOUT, WORK STOPPAGE OR LABOR DISPUTE, NATURAL
          DISASTER, WEATHER, TERRORISM, OR ANY ACT OR OMISSION OF A THIRD PARTY.
          THE CLUB MAKES NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED,
          WITH RESPECT TO THE MERCHANTABILITY OR FITNESS FOR A PARTICULAR
          PURPOSE OR ANY OTHER REASON WITH RESPECT TO THE MEMBERSHIP CARDS,
          POINTS, REWARDS AND/OR THE PROGRAM.{' '}
        </Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonDecline}
          onPress={handleDeclineClick}>
          <Text style={styles.buttonTextDecline}>DECLINE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonAccept}
          onPress={handleAcceptClick}>
          <Text style={styles.buttonTextAgree}>ACCEPT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    fontFamily: 'Nunito Sans',
    color: 'rgb(16, 41, 89)',
    paddingLeft: 50,
  },
  scrollableView: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 15,
    padding: 5,
    height: 400,
    borderColor: 'rgb(16, 41, 89)',
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 18,
  },
  sectionContent: {
    fontSize: 16,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 10,
  },
  buttonTextDecline: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Nunito Sans',
    color: 'white',
  },
  buttonTextAgree: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Nunito Sans',
    color: 'rgba(169, 7, 10, 1)',
  },
  buttonAccept: {
    borderWidth: 2,
    borderColor: 'rgba(169, 7, 10, 1)',
    padding: 10,
    backgroundColor: 'white',
    color: 'rgba(169, 7, 10, 1)',
    borderRadius: 25,
    width: 150,
    alignItems: 'center',
  },
  buttonDecline: {
    backgroundColor: 'rgba(169, 7, 10, 1)',
    padding: 10,
    borderRadius: 25,
    width: 150,
    alignItems: 'center',
  },
  bold: {
    fontWeight: '600',
  },
});

export default PrivacyPolicy;
