import React, { Component } from 'react';
import styles from './GNav.less';
import classNames from 'classnames';
import { Row, Col } from 'antd';
import { Link } from 'react-router';

export default class GNav extends Component {
	render() {
		return (
			<div className={styles["GNav-wrap"]}>
				<Row gutter={16}>
					{this.renderItems(this.props.items)}
				</Row>
			</div>
		);
	}
	renderItems(items) {
		return items.map((item, index) => {
			const { pic, url, name } = item;
			return (
				<Col key={index} className={styles["GNav-row"]} span={4}>
					<div className={styles["GNav-box"]}>
						<div className={styles["group-container"]}>
							<Link className={ classNames(styles['GNav-link'], this.props.path === url ? styles.on: null ) } to={url}>
								<div className={styles["group-image"]}>
									<img src={pic} />
								</div>
								{name}
							</Link>
						</div>
					</div>
				</Col>
			);
		});
	}
}
