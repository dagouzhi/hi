import React, { Component } from 'react';
import classNames from 'classnames';
import { Row, Col } from 'antd';
import Link from 'gatsby-link';

import './GNav.less';

export default class GNav extends Component {
  renderItems(items) {
    return items.map((item, i) => {
      const { pic = '', url, name } = item;
      return (
        <Col key={`item-${i}`} span={4}>
          <div className={`GNav-box`}>
            <div className={'group-container'}>
              <Link className={classNames('GNav-link', this.props.path === url ? 'on' : null)} to={url}>
                <div className={'group-image'}>
                  {/*<img alt="login" src={pic} />*/}
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
      <div className={'GNav-wrap'}>
        <Row gutter={16}>
          {this.renderItems(this.props.items)}
        </Row>
      </div>
    );
  }
}
