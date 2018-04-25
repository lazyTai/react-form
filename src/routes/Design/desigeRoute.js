import React from 'react'

import Loadable from 'react-loadable';
import Loading from '../../components/Loading'
import {connect} from 'dva';
import styles from './desigeRoute.css'
import Header from '../../components/design/Header'
import {Switch, Route, Redirect} from 'react-router'


/*page*/
const PageAdd = Loadable({
    loader: () => import('./add'),
    loading: Loading
});
const PageEdit = Loadable({
    loader: () => import('./edit'),
    loading: Loading
});
const PagePublish = Loadable({
    loader: () => import('./publish.js'),
    loading: Loading
});

class DesignRoutes extends React.Component {
    render() {
        var {history, dispatch} = this.props;
        var {process_index, process_status} = this.props.store.design_global
        // debugger
        return <div className={styles.DesignRoutes}>
            <Header history={history} process_index={process_index} dispatch={dispatch}
                    process_status={process_status}/>
            <Switch>
                <Route path="/app/design/add" component={PageAdd}></Route>
                <Route path="/app/design/edit" component={PageEdit}></Route>
                <Route path="/app/design/publish" component={PagePublish}></Route>
            </Switch>
        </div>
    }
}

function mapStateToProps(state) {
    return {store: state};
}

export default connect(mapStateToProps)(DesignRoutes);