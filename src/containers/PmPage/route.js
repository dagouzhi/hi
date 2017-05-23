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
]