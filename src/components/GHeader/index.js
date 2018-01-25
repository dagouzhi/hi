import React, { Component } from 'react';
import { Input } from 'antd';
import './GHeader.less';

const Search = Input.Search;

export default class GHeader extends Component {
  onSearch = (data) => {
    window.open(`https://www.baidu.com/s?wd=${data}`);
  }
  render() {
    return (
      <div className={'GHeader-wrap'}>
        <div className={'GHeader-l'} />
        <div className={'GHeader-r'} />
        <div className={'GHeader-center'}>
          <div className={'searchWrap'}>
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
