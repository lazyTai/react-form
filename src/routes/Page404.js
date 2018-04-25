import React from 'react';
import { connect } from 'dva';
import styles from './Page404.css';

function Page404() {
  return (
    <div className={styles.normal}>
      Route Component: Page404
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Page404);
