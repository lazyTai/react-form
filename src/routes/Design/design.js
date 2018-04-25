import React from 'react';
import { connect } from 'dva';
import styles from './design.css';

function Design() {
  return (
    <div className={styles.normal}>
      Route Component: Design/design
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Design);
