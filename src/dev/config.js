export default [
  {
    path: '/',
    component: require('./Base').default,
    children: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        component: require('./Home').default,
        meta: {
          title: '首页'
        }
      },
      {
        path: '/about',
        component: require('./About').default,
      },
    ],
  },
];