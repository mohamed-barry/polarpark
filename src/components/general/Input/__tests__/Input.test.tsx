import React from 'react';
import {fireEvent, render} from '@app/utils/test.utils';
import {Input} from '@app/components';

describe('[Input] Rendering & State Changes', () => {
  const onChangeText = jest.fn();
  const value = 'stub value';

  it('should render correctly', () => {
    const component = render(
      <Input
        iconName="user"
        onChangeText={onChangeText}
        placeholder="label"
        value={value}
      />,
      {},
    );
    expect(component).toMatchSnapshot();
  });

  it('should render correctly without an icon', () => {
    const component = render(
      <Input onChangeText={onChangeText} placeholder="label" value={value} />,
      {},
    );
    expect(component).toMatchSnapshot();
  });

  //   it('should change the borderColor to #1267CD when focused', async () => {
  //     const {getByTestId, getByPlaceholderText} = render(
  //       <Input onChangeText={onChangeText} placeholder="label" value={value} />,
  //       {},
  //     );
  //     fireEvent.press(getByPlaceholderText('label'));

  //     expect(getByTestId('input')).toHaveStyle({borderColor: '#1267CD'});
  //   });
});
