import React from 'react';
import {render} from '@app/utils/test.utils';
import {Ticket} from '@app/components';

describe('[Ticket]', () => {
  it('should render correctly', () => {
    const component = render(<Ticket />, {});
    expect(component).toMatchSnapshot();
  });
});
