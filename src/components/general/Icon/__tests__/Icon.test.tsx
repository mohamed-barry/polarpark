import React from 'react';
import {render} from '@app/utils/test.utils';
import {Icon} from '@app/components';

describe('[Icon]', () => {
  it('should render correctly', () => {
    const component = render(<Icon name="chevron-left" />, {});
    expect(component).toMatchSnapshot();
  });

  it('should render with a different color icon', () => {
    const {queryByText} = render(
      <Icon name="chevron-left" color="black" />,
      {},
    );
    expect(queryByText('')).toHaveStyle({color: '#000000'});
  });

  it('should change the color to #1267CD when focused', () => {
    const {queryByText} = render(
      <Icon name="chevron-left" focused={true} />,
      {},
    );
    expect(queryByText('')).toHaveStyle({color: '#1267CD'});
  });
});
