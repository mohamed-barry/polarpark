import React from 'react';
import {render} from '@app/utils/test.utils';
import {TextDivider} from '@app/components';

describe('[TextDivider]', () => {
  it('should render correctly with a label', () => {
    const component = render(<TextDivider label="or log in with" />, {});
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with a placeholder', () => {
    const component = render(<TextDivider />, {});
    expect(component).toMatchSnapshot();
  }); // todo fix this test to actually test for a placeholder

  it('should render with the label', () => {
    const {queryByTestId} = render(<TextDivider label="or log in with" />, {});
    expect(queryByTestId('label')).toHaveTextContent('or log in with');
  });
});
