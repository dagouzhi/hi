import React from 'react';
import { connect } from 'dva';
import { Row } from 'antd';
import styles from './Home.less';

import GHeader from '../../components/GHeader/index';
import GFooter from '../../components/GFooter/index';
import GNav from '../../components/GNav/index';

class Home extends React.Component {
  returnTools = (tools = []) => {
    return tools.map((item, index) => {
      return (
        <div key={index} className={styles['box-wrap']}>
          <h2 className={styles['box-title']}><strong>{item.title}</strong></h2>
          <div className={styles.boxMain}>
            <ul className={styles['items-wrap']}>
              {item.list.map((data, key) => {
                return (
                  <li key={key} className={styles['item-wrap']}>
                    <h3 className={styles['item-title']}>
                      <strong>{data.name}</strong>
                      <span>{data.info}</span>
                    </h3>
                    <Row>
                      <ul className={styles['tools-items']}>
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
        <li key={index} className={styles['tools-item']}>
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
    const { init = {}, route = {} } = this.props;
    const { nav = [], tools = [] } = init;
    const path = route.path.replace('/', '');
    const items = tools[path] || [];
    return (
      <div className={styles.PmPage}>
        <div className={styles['PmPage-header']}>
          <GHeader />
        </div>
        <div className={styles['PmPage-body']}>
          <div className={styles['box-wrap']}>
            <GNav
              items={nav}
              path={route.path}
            />
          </div>
          {this.returnTools(items)}
        </div>
        <div className={styles['PmPage-footer']}>
          <GFooter />
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
