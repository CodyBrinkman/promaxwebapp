import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '../pages/Dashboard.vue';
import Notifications from '../pages/Notifications.vue';
import Pharmacies from '../pages/Pharmacies.vue';
import HelpSupport from '../pages/HelpSupport.vue';
import Chart from '../pages/Chart.vue';
import Providers from '../pages/Providers.vue';
import Claims from '../pages/Claims.vue';
import Login from '../pages/core/Login.vue';
import Home from '../pages/core/Home.vue';
import Error from '../pages/core/Error.vue';
import Search from '../pages/Search.vue';



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        breadcrumb: [
          { name: 'Dashboard' }
        ]
      }
    },
    {
      path: '/providers',
      name: 'Providers',
      component: Providers,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Providers' }
        ]
      }
    },
    {
      path: '/helpsupport',
      name: 'HelpSupport',
      component: HelpSupport,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'HelpSupport' }
        ]
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Search' }
        ]
      }
    },
    {
      path: '/claims',
      name: 'Claims',
      component: Claims,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Claims' }
        ]
      }
    },
    {
      path: '/pharmacies',
      name: 'Pharmacies',
      component: Pharmacies,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Pharmacies' }
        ]
      }
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: Notifications,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Notifications' }
        ]
      }
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart,
      meta: {
        breadcrumb: [
          { name: 'Dashboard', href: 'Dashboard' },
          { name: 'Chart' }
        ]
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        allowAnonymous: true
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        allowAnonymous: true
      }
    },
    {
      path: '/error',
      name: 'Error',
      component: Error,
      meta: {
        allowAnonymous: true
      }
    },
  ]
});
