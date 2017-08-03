import React from 'react';
import styles from './GFooter.less';

export default class GFooter extends React.Component {
  render() {
    return (
      <div className="GFooter-wrap">
        <div className="GFooter-l" />
        <div className="GFooter-r" />
        <div className={styles.center}>
          VERSION: {__VERSION__}
        </div>
      </div>
    );
  }
}
