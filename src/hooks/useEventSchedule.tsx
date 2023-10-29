import {useEffect, useState} from 'react';
import {TDC} from '@app/api/model/tdc';
import {getEventSchedule} from '@app/api';

export default function useEventSchedule() {
  const [events, setEvents] = useState<Array<TDC.Event>>([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await getEventSchedule();
        setEvents(response);
      } catch (err) {
        console.log('there was an error');
      }
    }
    fetchEvents();
  }, []);

  return events;
}
