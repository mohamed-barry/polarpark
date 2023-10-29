import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';
import {TDC} from '@app/api/model/tdc';
import {CACHE_LINE_ITEM_KEY} from '@app/api/constants';
import PATRON_DATA from '@app/api/data/lineItemData.json';

export async function getPatronTickets(
  id: number,
): Promise<Array<TDC.LineItem>> {
  let lineItem: Array<TDC.LineItem> = [];

  const {getItem, setItem} = useAsyncStorage(CACHE_LINE_ITEM_KEY);

  // AsyncStorage.clear();

  try {
    const cache = await getItem();

    if (cache) {
      lineItem = await JSON.parse(cache);
    } else {
      const response = PATRON_DATA;
      const json = JSON.stringify(response);

      await setItem(json);
    }
  } catch (err) {
    console.log('There was an error');
  }

  return lineItem;
}
