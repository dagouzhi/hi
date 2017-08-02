import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import styles from './Home.less';

import GHeader from '../../components/GHeader/index';
import GFooter from '../../components/GFooter/index';
import GNav from '../../components/GNav/index';

class Home extends React.Component {
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
              items = {nav}
              path = {route.path}
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
  returnTools = (tools = []) => {
    return tools.map((item, index) => {
      return (
        <div key={index} className={styles["box-wrap"]}>
          <h2 className={styles["box-title"]}><strong>{item.title}</strong></h2>
          <div className={styles["box-main"]}>
            <ul className={styles["items-wrap"]}>
              {item.list.map((item, index) => {
                return (
                  <li key={index} className={styles["item-wrap"]}>
                    <h3 className={styles["item-title"]}>
                      <strong>{item.name}</strong>
                      <span>{item.info}</span>
                    </h3>
                    <Row>
                      <ul className={styles["tools-items"]}>
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
        <li key={index} className={styles["tools-item"]}>
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

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Home);
