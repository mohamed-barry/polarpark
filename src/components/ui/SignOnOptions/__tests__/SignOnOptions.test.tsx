import React from 'react';
import {render} from '@app/utils/test.utils';
import {SignOnOptions} from '@app/components';

// todo find out how to do jest mock for user modal
describe('[SignOnOptions]', () => {
  it('should render correctly', () => {
    const component = render(<SignOnOptions />, {});
    expect(component).toMatchSnapshot();
  });
});
