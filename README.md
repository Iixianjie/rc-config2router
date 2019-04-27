# rc-config2router
## introduce
配置式react-router

<br>

## Features
* 使用配置式路由的方式生成路由rr5路由
* 基于rr5，所以使用体验与rr5基本一致
* 继承了权限、routeChange等实用功能

<br>

## Example
```js
// 配置
import Test1 from './components/Test1';
import Test1_1 from './components/Test1_1';
import Test1_2 from './components/Test1_2';
import Test2 from './components/Test2';
import Test3 from './components/Test3';
import Test4 from './components/Test4';
import NotFound from './components/NotFound';
import Auth from './components/Auth';
import Auth2 from './components/Auth2';
import Layout from './components/layout';

export const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        redirect: '/test1',
      },
      {
        path: '/test1',
        component: Test1,
        children: [
          {
            path: '/test1',
            redirect: '/test1/Test1_1',
          },
          {
            path: '/test1/Test1_1',
            component: Test1_1,
            meta: {
              title: 'Test1_1',
            },
          },
          {
            path: '/test1/Test1_2',
            component: Test1_2,
            meta: {
              title: 'Test1_2',
            },
          },
        ],
      },
      {
        path: '/test2',
        component: Test2,
        meta: {
          title: 'test2',
        },
      },
      {
        path: '/test3',
        component: Test3,
        wraper: [Auth, Auth2],  // 使用数组中的组件进行包裹验证，验证顺序为从左到右
        meta: {
          title: 'test3',
        },
      },
      {
        component: NotFound,
        meta: {
          title: '404',
        },
      },
    ],
  },
];

// app.js
import RcRouterView, { hashHistory, history } from './packages/index';

function handleRouterChange(route) {
  document.title = route.meta.title || 'app title';
}

function App(props) {
  return (
    <RcRouterView routerConfig={routes} history={history} onRouterChange={handleRouterChange} />
  );
}
```



<br>
## Installation

```
npm install @lxjx/rc-config2router

// or

yarn install @lxjx/rc-config2router
```


<br>

