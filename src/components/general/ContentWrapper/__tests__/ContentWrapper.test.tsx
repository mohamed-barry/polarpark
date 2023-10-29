import React from 'react';
import {render} from '@app/utils/test.utils';
import {ContentWrapper} from '@app/components';

describe('[ContentWrapper]', () => {
  it('should render correctly', () => {
    const component = render(
      <ContentWrapper>
        <></>
      </ContentWrapper>,
      {},
    );
    expect(component).toMatchSnapshot();
  });
});
