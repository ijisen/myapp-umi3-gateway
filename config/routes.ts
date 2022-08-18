const NotFound = '@/pages/exception/404';

const routes = [
  { path: '/', component: '@/pages/home' },
  // { name: 'demo', path: '/demo', component: '@/pages/demo' },
  { name: 'home', path: '/home', component: '@/pages/home' },
  {
    path: '/demo',
    name: 'demo',
    routes: [
      { path: '/demo', redirect: '/demo/useModel' },
      {
        name: 'useModel',
        path: '/demo/useModel',
        component: '@/pages/demo/useModel',
      },
      {
        name: 'useDva',
        path: '/demo/useDva',
        component: '@/pages/demo/useDva',
      },
      { component: NotFound },
    ],
  },
  { name: 'list', path: '/list', component: '@/pages/list' },
  { name: 'admin', path: '/admin', component: '@/pages/admin' },
  {
    path: '/domain',
    name: 'domain',
    routes: [
      { path: '/domain', redirect: '/domain/create' },
      {
        name: 'create',
        path: '/domain/create',
        component: '@/pages/domain/domainCreate',
      },
      {
        name: 'manage',
        path: '/domain/manage',
        component: '@/pages/domain/domainManage',
      },
      { component: NotFound },
    ],
  },
  {
    path: '/exc',
    name: 'exc',
    routes: [
      { path: '/exc', redirect: '/exc/404' },
      { name: '403', path: '/exc/403', component: '@/pages/exception/403' },
      { name: '404', path: '/exc/404', component: '@/pages/exception/404' },
      { name: '500', path: '/exc/500', component: '@/pages/exception/500' },
      { component: NotFound },
    ],
  },
  {
    path: '/user',
    routes: [
      { path: '/user', component: '@/pages/list' },
      // { path: '/user/admin', component: '@/pages/admin' },
      { component: NotFound },
    ],
  },
  { component: NotFound },
];

export default routes;
