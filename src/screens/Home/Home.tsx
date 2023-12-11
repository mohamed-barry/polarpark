import React, {useEffect, useState} from 'react';
import {
  Box,
  Button,
  Event,
  Footer,
  DefaultEvent,
  Section,
  TicketPreview,
} from '@app/components';
import {ScrollView} from 'react-native';
import {useEventSchedule} from '@app/hooks';
import {getPatronTickets} from '@app/api';
import {TDC} from '@app/api/model/tdc';
import {useDispatch} from 'react-redux';
import {partition} from '@app/helpers';
import {setActive, setInactive} from '@app/context/features';
import {useNavigation} from '@react-navigation/native';
import {
  RootStackNavigationProps,
  TicketStackNavigationProps,
} from '@app/navigation/types';
import { FMEvent, getFanmakerEvents } from '@app/api/features/getFanmakerEvents';
import UpcomingTickets from '@app/components/ui/UpcomingTickets/UpcomingTickets';
import MapBox from '@app/components/ui/Map/MapBox';

export default function Home(): JSX.Element {
  const [activeItem, setActiveItem] = useState<Array<TDC.LineItem>>([]);
  const [loading, setLoading] = useState(true);

  const defaultEvents: Array<FMEvent> = [];

  const [events, setEvents] = useState(defaultEvents);


  const dispatch = useDispatch();

  const ticketNav = useNavigation<RootStackNavigationProps<'Main'>>();
  const purchaseNav = useNavigation<TicketStackNavigationProps<'Wallet'>>();

  const navigateToTicket = () => ticketNav.navigate('ViewTicket');
  const navigateToPurchaseTicket = () => purchaseNav.navigate('PurchaseTicket');

  useEffect(() => {
    async function fetchPatronInfo() {
      try {
        const userId = 613373703;
        const response = await getPatronTickets(userId);

        const [active, inactive] = partition(
          response,
          (lineItem: TDC.LineItem) =>
            lineItem.tickets.length > 0 ? lineItem.tickets[0]!.active : false,
        );

        dispatch(setActive(active));
        dispatch(setInactive(inactive));

        setActiveItem(active);
      } catch (err) {
        console.log('Handle this better!!!!');
      } finally {
        setLoading(false);
      }
    }
    fetchPatronInfo();

    getFanmakerEvents({useCache: true})
      .then((ev) => {
        // console.log("got events");
        setEvents(ev);
      })
      .catch((e) => {
        console.error(e);
      })
  }, []);

  return (
    <>
      {loading ? null : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Section title="Map of Polar Park">
            <MapBox />
          </Section>

          <Section title="Events at Polar Park" mb="l">
            {events.length == 0? 
            <DefaultEvent />
            :
            events.map((event, idx) => {
              return (
                <React.Fragment key={event.id}>
                  {idx > 0 ? (
                    <Box
                      borderColor="horizontalRule"
                      borderBottomWidth={0.4}
                      my="s"
                    />
                  ) : null}
                  <Event event={event} />
                </React.Fragment>
              );
            })}
            {/* <Link
              mt="l"
              onPress={() => {}}
              color="authenticationLink"
              fontWeight="bold"
              textAlign="center"
              variant="body">
              View more
            </Link> dedicated events page could be linked to here*/}
          </Section>
          {/* <Section title="Polar Park News">
            <Placeholder height={112} mb="m" width="100%" />
            <Placeholder height={112} mb="m" width="100%" />
            <Placeholder height={112} mb="m" width="100%" />
          </Section> maybe a social media feed in the future?*/}
          <Footer text="Having troubles with the Polar Park app?" />
        </ScrollView>
      )}
    </>
  );
}
