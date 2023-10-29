import React from 'react';
import {fireEvent, render} from '@app/utils/test.utils';
import {Link} from '@app/components';

let mockPress = jest.fn();
mockPress.mockReturnValue('pressed');

describe('[Link]', () => {
  it('should render correctly', () => {
    const component = render(
      <Link onPress={mockPress} variant="body">
        This is some link text
      </Link>,
      {},
    );
    expect(component).toMatchSnapshot();
  });

  it('should have the correct text', () => {
    const {getByText} = render(
      <Link onPress={mockPress} variant="body">
        This is some link text
      </Link>,
      {},
    );
    expect(getByText('This is some link text')).toBeTruthy();
  });

  it('should register a click event', () => {
    const {getByText} = render(
      <Link onPress={mockPress} variant="body">
        This is some link text
      </Link>,
      {},
    );
    fireEvent.press(getByText('This is some link text'));
    expect(mockPress).toHaveBeenCalledTimes(1);
  });
});
