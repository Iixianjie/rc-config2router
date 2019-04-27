import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Router } from 'react-router-dom';
import { createRoutes } from './config2routes';
import _throttle from 'lodash/throttle';
import { history as _history } from './history';

/* 用于导出Route组的包装组件 */
function RcRouterView({ routerConfig, location, history, ...options }) {
  if (options.onRouterChange) {
    // 进入子路由和父路由进入时会触发触发两次，只触发最后一次即可
    options.onRouterChange = _throttle(options.onRouterChange, 50, {
      leading: false,
    });
  }

  return (
    <Router history={history}>
      <Switch>
        {createRoutes(routerConfig, options)}
      </Switch>
    </Router>
  );
}

RcRouterView.defaultProps = {
  history: _history,
};

RcRouterView.propTypes = {
  routerConfig: PropTypes.array.isRequired,
  history: PropTypes.any.isRequired,
  onRouterChange: PropTypes.func,
};


export default RcRouterView;