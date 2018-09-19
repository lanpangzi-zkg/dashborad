import Loadable from 'react-loadable';
import Loading from '../component/Loading';

export default [{
    exact: true,
    path: '/',
    component: Loadable({
        loader: () => {
            return import('../pages/home/Hello');
        },
        loading: Loading,
    }),
}, {
    path: '/one',
    component: Loadable({
        loader: () => {
            return import('../pages/one');
        },
        loading: Loading,
    }),
}, {
    path: '/children',
    component: Loadable({
        loader: () => {
            return import('../pages/children');
        },
        loading: Loading,
    }),
}, {
    path: '/dataFlow',
    component: Loadable({
        loader: () => {
            return import('../pages/dataFlow');
        },
        loading: Loading,
    }),
}, {
    path: '/redux',
    component: Loadable({
        loader: () => {
            return import('../pages/reduxView');
        },
        loading: Loading,
    }),
}, {
    path: '/context',
    component: Loadable({
        loader: () => {
            return import('../pages/context');
        },
        loading: Loading,
    }),
}, {
    path: '/importTest',
    component: Loadable({
        loader: () => {
            return import('../pages/importTest');
        },
        loading: Loading,
    }),
}, {
    path: '/styledComponent',
    component: Loadable({
        loader: () => {
            return import('../pages/styledComponent');
        },
        loading: Loading,
    }),
}];

// import Hello from '../pages/home/Hello';
// import One from '../pages/one';
// import Children from '../pages/children';
// import DataFlow from '../pages/dataFlow';
// import ReduxView from '../pages/reduxView';
// import Context from '../pages/context';
// import ImportTest from '../pages/importTest';
// import styledComponent from '../pages/styledComponent';

// export default [{
//     exact: true,
//     path: '/',
//     component: Hello,
// }, {
//     path: '/one',
//     component: One,
// }, {
//     path: '/children',
//     component: Children,
// }, {
//     path: '/dataFlow',
//     component: DataFlow,
// }, {
//     path: '/redux',
//     component: ReduxView,
// }, {
//     path: '/context',
//     component: Context,
// }, {
//     path: '/importTest',
//     component: ImportTest,
// }, {
//     path: '/styledComponent',
//     component: styledComponent,
// }];
