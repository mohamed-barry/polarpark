import React from 'react';
import {render} from '@app/utils/test.utils';
import {ScheduleItem} from '@app/components';

describe('[ScheduleItem]', () => {
  it('should render correctly', () => {
    const component = render(
      <ScheduleItem
        description="This is a description"
        isoString="2023-03-31T16:05:00-04:00"
        title="This is a title"
      />,
      {},
    );
    expect(component).toMatchSnapshot();
  });
});
