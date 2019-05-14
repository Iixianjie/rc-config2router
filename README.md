# rc-config2router
## Introduce
配置式react-router

<br>

## Features
* 使用配置式路由的方式生成路由rr5路由
* 基于rr5，所以使用体验与rr5基本一致
* 添加了权限、routeChange等实用功能

<br>

## Example

[查看演示dome](https://stackblitz.com/edit/rc-router-test?file=index.js)  

```js
// 配置
export const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        redirect: '/Home',
      },
      {
        path: '/Home',
        component: Home,
        children: [
          {
            path: '/Home',
            redirect: '/Home/List',
          },
          {
            path: '/Home/List',
            component: HomeList,
            meta: {
              title: '首页-详情',
            },
          },
          {
            path: '/Home/Desc',
            component: HomeDesc,
            meta: {
              title: '首页-列表',
            },
          },
        ],
      },
      {
        path: '/About',
        component: About,
        meta: {
          title: '关于',
        },
      },
      {
        path: '/PrivatePage',
        component: PrivatePage,
        wraper: [Auth1, Auth2],  // 权限验证顺序为从左到右
        meta: {
          title: '权限路由',
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
import RcRouterView, { hashHistory, history } from '@lxjx/rc-config2router';

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

## Api
### RcRouterView  
\<React.Component>

<br>

#### routerConfig
\<arr>
路由配置,格式为  

```js
  [
    // 每一个RouteItem都可以具有以下基本字段
    {
      path: *<str>,   // 匹配路径
      component: *<React.Component>,  // path匹配时用于渲染的组件
      redirect: <str>,  // 重定向到的路由
      meta: <obj>,   // 传递给被匹配组件的元数据
      wraper: <arr>,   // 用于回作为包装组件包裹component属性指向的路由，有多个项时验证顺序为从左到右
      children: <arr[RouteItem]>    // 路由项
    }
  ]
```

#### history  
\<history.history() | history.hashHistory()>  
用于设置路由类型，只能传入包中导出的`{ hashHistory, history } from '@lxjx/rc-config2router'`  


<br>

#### onRouterChange
\<fn>  
路由改变时触发, 当前的路由匹配项回作为参数传入。

