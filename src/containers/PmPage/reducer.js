import { fromJS } from 'immutable';
import TYPE from './constants';

const {
	TEST_TEMPLSTE,
	TEST_REQUESTED_TEMPLSTE,
	TEST_SUCCEEDED_TEMPLSTE,
	TEST_FAILED_TEMPLSTE,
} = TYPE;

const initialState = fromJS({
  text: '点点同步redux actions看看。。',
	async: '点点异步redux actions看看。。',
	isFetching: false,
	globalModal: {
		type: '',
		title: '',
		content: '',
		onOk: null,
		onCancel: null,
	},
	nav: [
		{
			pic: 'http://wulihub.pmdaniu.com/uploads/201704/25/15/0437qEtW6rUP.png',
			name: '产品',
		},
		{
			pic: 'http://wulihub.pmdaniu.com/uploads/201704/25/14/5458YNKdil58.png',
			name: '设计',
		},
		{
			pic: 'http://wulihub.pmdaniu.com/uploads/201704/25/15/0235bxO4L3yt.png',
			name: '运营',
		},
		{
			pic: 'http://wulihub.pmdaniu.com/uploads/201704/25/15/0333E9RHL6Gc.png',
			name: '市场',
		},
		{
			pic: 'http://wulihub.pmdaniu.com/uploads/201704/25/15/0355orxCR7Go.png',
			name: '测试',
		},
		{
			pic: 'http://wulihub.pmdaniu.com/uploads/201704/25/15/0909zkg1hiqD.png',
			name: '程序员',
		},
	],
	tools: [
		{
			title: '产品常用',
			items: [
				{
					name: '原型工具',
					info: 'Prototype',
					list: [
						{
							pic: 'http://wulihub.pmdaniu.com/uploads/201704/27/15/3502V63IHiJt.png',
							name: 'Axure',
							info: '原型与交互｜论坛',
							url: 'http://www.webppd.com/forum-28-1.html',
						},
					]
				}
			],
		}
	],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST_TEMPLSTE: {
      return state.setIn(['text'], action.text);
    }
	  case TEST_REQUESTED_TEMPLSTE: {
		  return state.setIn(['async'], '等等看看。。');
	  }
	  case TEST_SUCCEEDED_TEMPLSTE: {
		  return state.setIn(['async'], '谢谢等待，我是你想看到的数据！');
	  }
	  case TEST_FAILED_TEMPLSTE: {
		  return state.setIn(['async'], '啊，错误，我是不是你想看到的数据！');
	  }
    default: {
      return state;
    }
  }
};
