import React from 'react';
import {render} from '@app/utils/test.utils';
import {Box} from '@app/components';

describe('[Box]', () => {
  it('should render correctly', () => {
    const component = render(
      <Box>
        <></>
      </Box>,
      {},
    );
    expect(component).toMatchSnapshot();
  });
});
