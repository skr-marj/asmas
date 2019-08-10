import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Eventos = React.lazy(() => import('./views/Eventos/Eventos'));
const Beneficios = React.lazy(() => import('./views/Beneficios/Beneficios'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/eventos', name: 'Eventos', component: Eventos },
  { path: '/beneficios', name: 'Beneficios', component: Beneficios },
  
];

export default routes;
