import React from 'react';
import { Route, Switch, Redirect, routerRedux } from 'dva/router';
import Loadable from 'react-loadable';
import Loading from './components/Loading'
const { ConnectedRouter } = routerRedux;

/* page  */
const PageLayout = Loadable({
    loader: () => import('./routes/layout'),
    loading: Loading
});
const Page404 = Loadable({
    loader: () => import('./routes/Page404'),
    loading: Loading
});

export default ({ history, app }) => {
    return (
        <ConnectedRouter history={history}>
            {/* <Layout>
                <Router>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/app/index" />} />
                    <Route exact path="/app" render={({ location: { pathname } }) => {
                        return <Redirect to="/app/index" />
                    }} />
                    <Route path="/app/index"
                        component={PageIndex} />
                    <Route path="/app/ui/button" exact
                        component={PageButton} />
                </Switch>
                </Router>
            </Layout> */}

            <Switch>
                <Route exact path="/" render={() => <Redirect to="/app" />} />
                <Route path="/app" component={PageLayout} />
                <Route component={Page404} />
            </Switch>

        </ConnectedRouter>
    );
}