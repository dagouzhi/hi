import React from 'react';
import { connect } from 'dva';
import styles from './Home.less';

import GHeader from '../../components/GHeader/index';
import GFooter from '../../components/GFooter/index';
import GNav from '../../components/GNav/index';

class Home extends React.Component {
  state = {};
  render() {
    const { init = {}, route = {} } = this.props;
    const { nav = [], tools } = init;
    const path = route.path.replace('/', '');
    const items = tools[path] || [];
    return (
      <div className="PmPage">
        <div className="PmPage-header">
          <GHeader />
        </div>
        <div className="PmPage-body">
          <div className="box-wrap">
            <GNav
              items = {nav}
              path = {route.path}
            />
          </div>
          {this.returnTools(items)}
        </div>
        <div className="PmPage-footer">
          <GFooter />
        </div>
      </div>
    );
  }
  returnTools = (tools = []) => {
    return tools.map((item, index) => {
      return (
        <div key={index} className="box-wrap">
          <h2 className="box-title"><strong>{item.title}</strong></h2>
          <div className="box-main">
            <ul className="items-wrap">
              {item.list.map((item, index) => {
                return (
                  <li key={index} className="item-wrap">
                    <h3 className="item-title">
                      <strong>{item.name}</strong>
                      <span>{item.info}</span>
                    </h3>
                    <Row>
                      <ul className="tools-items">
                        {this.returnItems(item.list)}
                      </ul>
                    </Row>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    })
  }
  returnItems = (items = []) => {
    return items.map((item, index) => {
      return (
        <li key={index} className="tools-item">
          <a href={item.url} target="_blank">
            <img src={item.pic} title="" />
            <p>
              <strong>{item.name}</strong>
              <span>{item.info}</span>
            </p>
          </a>
        </li>
      );
    });
  }
}

Home.propTypes = {
};

export default connect()(Home);
