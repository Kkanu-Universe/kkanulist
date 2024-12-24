/* eslint-disable react/jsx-key */
import React, { memo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Layout from '@block/Layout';

import routers from './index.router';

const App = () => (
  <BrowserRouter>
    <Routes>
      {routers.map(({ comp: Comp, childs, key, ...rest }) => (
        <Route key={key} {...rest} element={<Layout children={<Comp />} />}>
          {childs &&
            childs.length > 0 &&
            childs.map(({ comp: ChildComp, key: childKey, ...child }) => (
              <Route key={childKey} {...child} element={<Layout children={<ChildComp />} />} />
            ))}
        </Route>
      ))}
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  </BrowserRouter>
);

export default memo(App);
