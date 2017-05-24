const getComponents = (nextState, callback) => {
	require.ensure([], (require) => {
		callback(null, require('./index').default);
	});
}
export default [
	{
		path: '/pm',
		name: 'PmPage',
		breadcrumbName: '产品',
		_indexRoute: true,
		getComponents,
		childRoutes: [],
	},
	{
		path: '/designer',
		name: 'designer',
		breadcrumbName: '设计',
		_indexRoute: false,
		getComponents,
		childRoutes: [],
	},
	{
		path: '/operator',
		name: 'operator',
		breadcrumbName: '运营',
		_indexRoute: false,
		getComponents,
		childRoutes: [],
	},
	{
		path: '/marketer',
		name: 'marketer',
		breadcrumbName: '市场',
		_indexRoute: false,
		getComponents,
		childRoutes: [],
	},
	{
		path: '/tester',
		name: 'tester',
		breadcrumbName: '测试',
		_indexRoute: false,
		getComponents,
		childRoutes: [],
	},
	{
		path: '/web',
		name: 'web',
		breadcrumbName: '程序员',
		_indexRoute: false,
		getComponents,
		childRoutes: [],
	},
]