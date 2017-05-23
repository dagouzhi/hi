import React, { Component } from 'react';
import './assets/style.less';
import { Input } from 'antd';
const Search = Input.Search;

export default class GHeader extends Component {
	render() {
		return (
			<div className="GHeader-wrap">
				<div className="GHeader-l">

				</div>
				<div className="GHeader-r">

				</div>
				<div className="GHeader-center">
					<div className="GHeader-search">
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
