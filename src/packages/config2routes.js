import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

/**
 * @name createRoutes
 * @desc 接收一个约定式的路由配置项，返回一个Route组件组成的数组
 * @date 2019/4/26
 * @param <arr> routeConf 配置对象
 * @returns <ReactRouter.Route>
 */
export function createRoutes(routeConf, options) {
  return routeConf.map((v, i) => {
    return createRouteItems(v, i, options);
  });
}

/**
 * @name createRouteItems
 * @desc 接收一个route项，返回该项对应的Route组件配置
 * @date 2019/4/26
 * @param <any> routeConf的子项
 * @returns
 */
export function createRouteItems({ meta, component: Component, wraper, redirect, children, ...RouteProps }, index, options) {
  // 获取子路由
  let childRoutes;
  children && (childRoutes = createRoutes(children, options));

  // 除children、meta、component三个属性外的配置参数全部设置给Route组件。路由组件除了props额外传入meta和routes，分别对应用户自定义信息和子路由
  return (
    redirect ?
      <Redirect exact key={index} from={RouteProps.path} to={redirect} /> :
      <Route meta={meta} key={index} {...RouteProps} render={(props) => {
        // 触发自定义路由change事件，传入原信息与props
        options.onRouterChange && options.onRouterChange({ meta: meta || {}, ...props });

        if (Component) {
          if (wraper && Array.isArray(wraper)) {
            // wrap顺序是由内到外的，所有调整为符合常识的顺序
            let _wraper = wraper.slice().reverse();;
            let Wraped = _wraper.reduce((PrevComponent, NowComponent) => {
              return (
                <NowComponent>
                  {PrevComponent}
                </NowComponent>
              );
            }, <Component />);

            return Wraped;
          }

          return <Component {...props} meta={meta} children={<Switch>{childRoutes}</Switch>} />;
        }

        return null;
      }}
      />
  );
}

