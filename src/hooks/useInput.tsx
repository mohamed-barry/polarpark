import {useState} from 'react';

export default function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  const inputProps = {
    value: value,
    onChangeText: setValue,
  };

  return inputProps;
}
