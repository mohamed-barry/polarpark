import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {TDC} from '@app/api/model/tdc';
import {CACHE_EVENT_KEY} from '@app/api/constants';

import EVENT_DATA from '@app/api/data/eventData.json';

export async function getEventSchedule(): Promise<Array<TDC.Event>> {
  let events: Array<TDC.Event> = [];

  const {getItem, setItem} = useAsyncStorage(CACHE_EVENT_KEY);

  try {
    const cachedEvents = await getItem();

    if (cachedEvents) {
      events = await JSON.parse(cachedEvents);
    } else {
      const response = EVENT_DATA;
      const json = JSON.stringify(response);

      await setItem(json);
    }
  } catch (err) {
    console.log('There was an error');
  }

  return events;
}
