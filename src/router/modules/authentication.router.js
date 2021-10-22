export default [
  {
    path: '/auth',
    name: 'Authentication',
    component: () => import('../../views/authentication/Authentication.vue'),
    children: [
      {
        path: '/login',
        name: 'Login',
        components: {
          authentication: () => import('../../views/authentication/login/Login.vue'),
        },
        meta: {
          title: 'Login',
        },
      },
    ],
  },
];
