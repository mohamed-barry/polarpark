import {ComponentType} from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {render} from '@testing-library/react-native';
import theme from '@app/config/theme';
import '@testing-library/jest-native/extend-expect';

export interface WrapperProps {
  children: JSX.Element;
}

const Wrapper = ({children}: WrapperProps): JSX.Element => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

/* Override render from @testing-library/react-native */
const customRender = (ui: JSX.Element, options: any) =>
  render(ui, {wrapper: Wrapper as ComponentType, ...options});

/* Export the entire testing library */
export * from '@testing-library/react-native';

/* Export the custom render method */
export {customRender as render};
