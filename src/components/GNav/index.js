import React, { Component } from 'react';
import classNames from 'classnames';
import { Row, Col } from 'antd';
import { Link } from 'dva/router';

import styles from './GNav.less';

export default class GNav extends Component {
  renderItems(items) {
    return items.map((item, index) => {
      const { pic = '', url, name } = item;
      return (
        <Col key={index} span={4}>
          <div className={styles['GNav-box']}>
            <div className={styles['group-container']}>
              <Link className={classNames(styles['GNav-link'], this.props.path === url ? styles.on : null)} to={url}>
                <div className={styles['group-image']}>
                  <img alt="login" src={pic} />
                </div>
                {name}
              </Link>
            </div>
          </div>
        </Col>
      );
    });
  }
  render() {
    return (
      <div className={styles['GNav-wrap']}>
        <Row gutter={16}>
          {this.renderItems(this.props.items)}
        </Row>
      </div>
    );
  }
}
