import React, { Component, PropTypes, cloneElement } from 'react';
import GHeader from '../../components/GHeader';
import GFooter from '../../components/GFooter';
import GNav from '../../components/GNav';
import { fromJS } from 'immutable';
import './assets/style.less';
import { Row, Col } from 'antd';

export default class PmPage extends Component {
  state = {
    __data__: fromJS({}),
  };
  render() {
  	const { state } = this.props;
  	const { nav = [], tools } = state.get('PmPage').toJS();
    return (
	    <div className="PmPage">
		    <div className="PmPage-header">
			    <GHeader />
		    </div>
		    <div className="PmPage-body">
			    <div className="box-wrap">
				    <GNav
					    items = {nav}
				    />
			    </div>
			    {this.returnTools(tools)}
		    </div>
		    <div className="PmPage-footer">
					<GFooter />
		    </div>
	    </div>
    );
  }
  returnTools(tools = []) {
  	return tools.map((item, index) => {
  		return (
			  <div key={index} className="box-wrap">
				  <h2 className="box-title"><strong>{item.title}</strong></h2>
				  <div className="box-main">
					  <ul className="items-wrap">
						  {item.items.map((item, index) => {
						  	return (
								  <li key={index} className="item-wrap">
									  <h3 className="item-title">
										  <strong>{item.name}</strong>
										  <span>{item.info}</span>
									  </h3>
									  <Row>
										  <ul className="tools-items">
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
  returnItems(items = []) {
  	return items.map((item, index) => {
		  return (
			  <li key={index} className="tools-item">
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
