import React, { Component } from 'react';
import styles from './GFooter.less';

export default class GFooter extends Component {
	render() {
		return (
			<div className="GFooter-wrap">
				<div className="GFooter-l">

				</div>
				<div className="GFooter-r">
				</div>
				<div className={styles.center}>
          VERSION: {__VERSION__}
				</div>
			</div>
		);
	}
}
