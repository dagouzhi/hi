import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars';
import Particles from 'react-particles-js';

import './index.less'
class PageWrapper extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		const FastClick = require('fastclick');
		FastClick.attach(document.body);
	}
	render() {
		const { children } = this.props;
		return (
			<div>
				<Scrollbars className={`PassPortWrapper background`} style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 9, top: 0, left: 0, right: 0, bottom: 0 }}>
					<Helmet
						title="gatsby-dva-antd"
						meta={[
							{ name: 'description', content: 'Sample' },
							{ name: 'keywords', content: 'sample, something' },
						]}
					/>
					{children()}
				</Scrollbars>
				<Particles />
			</div>
		);
	}
}

PageWrapper.propTypes = {
	children: PropTypes.func,
}


const mapStateToProps = ({ app: { count } }) => {
	return { count }
}

const mapDispatchToProps = dispatch => {
	return {
		increment: () => dispatch({ type: 'app/increment' }),
		decrement: () => dispatch({ type: 'app/decrement' }),
		delayed: timeout => dispatch({ type: 'app/delayed', payload: { timeout } }),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PageWrapper)