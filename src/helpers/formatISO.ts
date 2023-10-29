import dayjs from 'dayjs';

export default function formatISO(date: string): string {
  return dayjs(date).format('ddd MMM DD h:mm A');
}
