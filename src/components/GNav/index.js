import React, { Component } from 'react';
import './assets/style.less';
import { Row, Col } from 'antd';
import { Link } from 'react-router';

export default class GNav extends Component {
	render() {
		return (
			<div className="GNav-wrap">
				<Row gutter={16}>
					{this.renderItems(this.props.items)}
				</Row>
			</div>
		);
	}
	renderItems(items) {
		return items.map((item, index) => {
			const { pic, name } = item;
			return (
				<Col key={index} className="GNav-row" span={4}>
					<div className="GNav-box">
						<div className="group-container">
							<Link className="GNav-link" to="">
								<div className="group-image">
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
