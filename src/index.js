import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Root from './root';
import 'antd/dist/antd.css';
import Dashboad from './context/Dashboard';
import { SliderFilter } from './context/SliderFilter';
import { Authorization } from './context/Authorization';
import { NavigateContext } from './context/NavigateContext';

ReactDOM.render(
  <BrowserRouter>
    <Dashboad>
      <SliderFilter>
        <Authorization>
          <NavigateContext>
            <Root />
          </NavigateContext>
        </Authorization>
      </SliderFilter>
    </Dashboad>
  </BrowserRouter>,
  document.getElementById('root')
);
