import React from 'react';
import styles from './GFooter.less';

export default class GFooter extends React.Component {
  render() {
    let version = '';
    try {
      version = __VERSION__ || ''
    } catch (e) {

    }
    return (
      <div className="GFooter-wrap">
        <div className="GFooter-l" />
        <div className="GFooter-r" />
        <div className={styles.center}>
          <div>工具箱 © 2017-2018 VERSION: {version}</div>
          <p>
            本网站为非赢利性站点，本网站所有内容均来源于<a href="http://wulihub.pmdaniu.com/">WuliHub</a>，本站不会保存、复制或传播，也不对本站上的任何内容负法律责任。
          </p>
          <p>
            发布的内容仅做react技术开发测试使用，如想了解更多资源可访问<a href="http://wulihub.pmdaniu.com/">WuliHub</a>！
          </p>
          <p>若本站侵犯了贵司版权，请给邮箱460559761@qq.com来信，我会及时处理和回复，谢谢！</p>
        </div>
      </div>
    );
  }
}
