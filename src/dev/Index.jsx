import React from 'react';

import RcRouterView, { hashHistory, history } from '../index';
import config from './config';

const Index = () => {
  console.log('index');
  return (
    <div>
      <RcRouterView routerConfig={config} history={hashHistory} onRouterChange={(a) => {
        // console.log(a);
      }}/>
    </div>
  );
};

export default Index;