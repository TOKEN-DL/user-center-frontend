export default [
  {
    path: '/user',
    layout: false,
    // access: 'canVIP',
    routes: [
      {name: '登录', path: '/user/login', component: './user/login'},
      {name: '注册', path: '/user/register', component: './user/register'}
    ],
  },
  {path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome'},
  {
    path: '/Admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {path: '/Admin', redirect: '/Admin/sub-page'},

      {path: '/Admin/user-manage', name: '用户管理页', component: './Admin/UserManage'},
    ],
  },
  {name: '查询表格', icon: 'table', path: '/list', component: './table-list'},
  {path: '/', redirect: '/welcome'},
  {path: '*', layout: false, component: './404'},
];
