import dayjs from 'dayjs';

export default function getEventDateAndTime(date: string) {
  const dateArr = dayjs(date).format('ddd MMM DD h:mm A').split(' ');
  const day = dateArr.slice(0, 3).join(' ').toUpperCase();
  const time = dateArr.slice(3).join(' ');

  return [day, time];
}