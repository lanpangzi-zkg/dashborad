import Loadable from 'react-loadable';
import Loading from '../component/Loading';

export default [{
    exact: true,
    path: '/',
    menuName: 'home',
    component: Loadable({
        loader: () => {
            return import('../pages/home/Hello');
        },
        loading: Loading,
    }),
}, {
    path: '/one',
    menuName: 'one',
    component: Loadable({
        loader: () => {
            return import('../pages/one');
        },
        loading: Loading,
    }),
}, {
    path: '/children',
    menuName: 'children',
    component: Loadable({
        loader: () => {
            return import('../pages/children');
        },
        loading: Loading,
    }),
}, {
    path: '/dataFlow',
    menuName: 'dataFlow',
    component: Loadable({
        loader: () => {
            return import('../pages/dataFlow');
        },
        loading: Loading,
    }),
}, {
    path: '/redux',
    menuName: 'redux',
    component: Loadable({
        loader: () => {
            return import('../pages/reduxView');
        },
        loading: Loading,
    }),
}, {
    path: '/context',
    menuName: 'context',
    component: Loadable({
        loader: () => {
            return import('../pages/context');
        },
        loading: Loading,
    }),
}, {
    path: '/importTest',
    menuName: 'importTest',
    component: Loadable({
        loader: () => {
            return import('../pages/importTest');
        },
        loading: Loading,
    }),
}, {
    path: '/styledComponent',
    menuName: 'styledComponent',
    component: Loadable({
        loader: () => {
            return import('../pages/styledComponent');
        },
        loading: Loading,
    }),
}, {
    path: '/gitHubApi',
    menuName: 'gitHubApi',
    component: Loadable({
        loader: () => {
            return import('../pages/gitHubApi');
        },
        loading: Loading,
    }),
}];
