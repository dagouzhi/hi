import React, { Component, PropTypes, cloneElement } from 'react';
import GHeader from '../../components/GHeader';
import { fromJS } from 'immutable';
import './assets/style.less';

export default class PmPage extends Component {
  state = {
    __data__: fromJS({}),
  };
  render() {
  	const { actions, state } = this.props;
  	const { testTemplate, testFetchTemplate } = actions.PmPage;
  	const { globalModal, text, async } = state.get('PmPage').toJS();
    return (
	    <div className="PmPage">
		    <div className="PmPage-header">
			    <GHeader />
		    </div>
		    <div className="PmPage-body">

		    </div>
		    <div className="PmPage-footer">

		    </div>
	    </div>
    );
  }
}
