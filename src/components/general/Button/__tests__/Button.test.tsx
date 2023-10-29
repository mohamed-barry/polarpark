import React from 'react';
import {fireEvent, render} from '@app/utils/test.utils';
import {Button} from '@app/components';

let mockPress = jest.fn();

describe('[Button]', () => {
  it('should render correctly', () => {
    const component = render(
      <Button onPress={mockPress} title="placeholder" />,
      {},
    );
    expect(component).toMatchSnapshot();
  });

  it('should have the correct text', () => {
    const {getByText} = render(
      <Button onPress={mockPress} title="placeholder" />,
      {},
    );
    expect(getByText('placeholder')).toBeTruthy();
  });

  it('should register a click event', () => {
    const {getByText} = render(
      <Button onPress={mockPress} title="placeholder" />,
      {},
    );
    fireEvent.press(getByText('placeholder'));
    expect(mockPress).toHaveBeenCalledTimes(1);
  });
});
