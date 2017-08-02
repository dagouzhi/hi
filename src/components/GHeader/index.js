import React, { Component } from 'react';
import { Input } from 'antd';
import styles from './GHeader.less';

const Search = Input.Search;

export default class GHeader extends Component {
  onSearch = (data) => {
    window.open(`https://www.baidu.com/s?wd=${data}`);
  }
  render() {
    return (
      <div className={styles['GHeader-wrap']}>
        <div className={styles['GHeader-l']} />
        <div className={styles['GHeader-r']} />
        <div className={styles['GHeader-center']}>
          <div className={styles.searchWrap}>
            <Search
              placeholder="搜索..."
              style={{ width: 348, height: 34 }}
              onSearch={value => this.onSearch(value)}
            />
          </div>
        </div>
      </div>
    );
  }
}
