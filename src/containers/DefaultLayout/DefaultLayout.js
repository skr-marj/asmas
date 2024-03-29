import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
//import * as router from 'react-router-dom';
import { Container } from 'reactstrap';
import {  AppAside, AppFooter, } from '@coreui/react'; //AppBreadcrumb2 as AppBreadcrumb, AppSidebarNav2 as AppSidebarNav,
// sidebar nav config
//import navigation from '../../_nav';
// routes config
import routes from '../../routes';
// Header AS+
//import Headerasmas from './Headerasmas';

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="app">
        <DefaultHeader/>
        <div className="app-body">
          <main className="main">
            <br></br>
            <br></br>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
