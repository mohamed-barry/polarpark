import React from 'react';
import MainRouter from '@app/navigation/routers/MainRouter';
import AuthRouter from '@app/navigation/routers/AuthRouter';
import {useSelector} from 'react-redux';
import {RootState} from '@app/context/store';

/**
 * Application routing was developed with 'React Navigation' v6.x
 * https://reactnavigation.org/
 */

export default function AppRouter(): JSX.Element {
  const authenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  return authenticated ? <MainRouter /> : <AuthRouter />;
}
