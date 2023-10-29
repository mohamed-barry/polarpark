import React from 'react';
import {render} from '@app/utils/test.utils';
import {ComingSoon} from '@app/components';

describe('[ComingSoon]', () => {
  it('should render correctly', () => {
    const component = render(<ComingSoon />, {});
    expect(component).toMatchSnapshot();
  });
});
