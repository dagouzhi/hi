import React from 'react';
import { connect } from 'dva';
import styles from './NotFound.less';

function NotFindPage() {
  return (
    <div className={styles.NotFindPage}>
      <div className={styles.n} />
    </div>
  );
}

NotFindPage.propTypes = {
};

export default connect()(NotFindPage);
