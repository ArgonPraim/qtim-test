import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HOME_POINT, POST_POINT } from '../../common/constants';
import { Home, Post } from '../../pages';
import { Layout } from '../../common/Layout';


export function Router(): JSX.Element {
  return(
    <BrowserRouter>
      <Switch>
        <Route path={HOME_POINT} exact>
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route path={POST_POINT} exact>
          <Layout>
            <Post />
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
