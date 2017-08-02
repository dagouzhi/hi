import React, { Component } from 'react';
import styles from './GHeader.less';
import { Input } from 'antd';
const Search = Input.Search;

export default class GHeader extends Component {
	render() {
		return (
			<div className={styles["GHeader-wrap"]}>
				<div className={styles["GHeader-l"]}>

				</div>
				<div className={styles["GHeader-r"]}>

				</div>
				<div className={styles["GHeader-center"]}>
					<div className={styles["GHeader-search"]}>
						<Search
							placeholder="搜索..."
							style={{ width: 348, height: 34 }}
							onSearch={value => console.log(value)}
						/>
					</div>
				</div>
			</div>
		);
	}
}
