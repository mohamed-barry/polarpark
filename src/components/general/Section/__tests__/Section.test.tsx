import React from 'react';
import {render} from '@app/utils/test.utils';
import {Section} from '@app/components';

describe('[ComingSoon]', () => {
  it('should render correctly', () => {
    const component = render(
      <Section subtitle="subtitle" title="title">
        <></>
      </Section>,
      {},
    );
    expect(component).toMatchSnapshot();
  });
});
