import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars';
import Particles from 'react-particles-js';

import GHeader from '../components/GHeader/index';
import GFooter from '../components/GFooter/index';
import GNav from '../components/GNav/index';

import './index.less'

import { nav } from '../utils/data';

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
		const { children, location } = this.props;
		console.log(this.props);
		return (
			<div>
				<Scrollbars className={`hiWrapper background`} style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 9, top: 0, left: 0, right: 0, bottom: 0 }}>
					<Helmet
						title="hi"
						meta={[
							{ name: 'description', content: 'Sample' },
							{ name: 'keywords', content: 'sample, something' },
						]}
					/>
					<div className={`hiPage-header`}>
						<GHeader />
					</div>
					<div className={`hiPage-body`}>
						<div className={`hiPage-nav`}>
							<GNav
								items={nav}
								path={location.pathname}
							/>
						</div>
						{children()}
					</div>
					<div className={`hiPage-footer`}>
						<GFooter />
					</div>
				</Scrollbars>
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