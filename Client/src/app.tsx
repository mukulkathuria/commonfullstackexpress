import React, { lazy, memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ErrorBoundary from './Components/ErrorBoundary';
import Loader from './Components/Loader';
import { StoreDto } from './Redux/Reducerdtos/store.dto';

// const Header = lazy(() => import('./Components/Header'));
const Login = lazy(() => import('./Components/Login'));
const SignUp = lazy(() => import('./Components/SignUp'));
const HomePage = lazy(() => import('./Components/Home'));

const App = memo(() => {
  const { user } = useSelector((state: StoreDto) => state.userReducer);
  useEffect(() => {
    const token = localStorage.getItem('x-token');
    if (token) {
      import('./Redux/store')
        .then(({ default: { dispatch } }) =>
          import('./Redux/Reducers/userReducer.actions').then(({ addUser }) =>
            addUser(token).then((res) => dispatch(res))
          )
        )
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          {/* <Header /> */}
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route
              exact
              path="/"
              render={() => {
                if (!user) return <Login />;
                return <HomePage />;
              }}
            />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
});

export default App;
