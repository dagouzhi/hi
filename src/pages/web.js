import React from 'react';
import { connect } from 'react-redux'
import { Row } from 'antd';
import './Home.less';

import { tools } from '../utils/data';
const Tools = tools;
class Home extends React.Component {
  returnTools = (tools = []) => {
    return tools.map((item, index) => {
      return (
        <div key={index} className={'box-wrap'}>
          <h2 className={'box-title'}><strong>{item.title}</strong></h2>
          <div className={'boxMain'}>
            <ul className={'items-wrap'}>
              {item.list.map((data, key) => {
                return (
                  <li key={key} className={'item-wrap'}>
                    <h3 className={'item-title'}>
                      <strong>{data.name}</strong>
                      <span>{data.info}</span>
                    </h3>
                    <Row>
                      <ul className={'tools-items'}>
                        {this.returnItems(data.list)}
                      </ul>
                    </Row>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    });
  };
  returnItems = (items = []) => {
    return items.map((item, index) => {
      return (
        <li key={index} className={'tools-item'}>
          <div onClick={() => this.open(item.url)}>
            <img alt="logo" src={item.pic} title="" />
            <p>
              <strong>{item.name}</strong>
              <span>{item.info}</span>
            </p>
          </div>
        </li>
      );
    });
  };
  open = (url) => {
    window.open(url);
  };
  render() {
    const items = Tools['web'] || [];
    return (
      <div className={`PmPage`}>
        <div className={`PmPage-body`}>
          {this.returnTools(items)}
        </div>
      </div>
    );
  }
}

Home.propTypes = {

};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Home);
