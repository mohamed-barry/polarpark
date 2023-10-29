import React from 'react';
import {render} from '@app/utils/test.utils';
import {Text} from '@app/components';

describe('[Text]', () => {
  it('should render correctly', () => {
    const component = render(
      <Text variant="default">This is some text</Text>,
      {},
    );
    expect(component).toMatchSnapshot();
  });

  it('should have correct text', () => {
    const {queryByTestId} = render(
      <Text testID="text-id" variant="default">
        This is some text
      </Text>,
      {},
    );
    expect(queryByTestId('text-id')).toHaveTextContent('This is some text');
  });
});
