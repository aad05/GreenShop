import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Root from './root';
import 'antd/dist/antd.css';
import Dashboad from './context/Dashboard';
import { SliderFilter } from './context/SliderFilter';

ReactDOM.render(
  <BrowserRouter>
    <Dashboad>
      <SliderFilter>
        <Root />
      </SliderFilter>
    </Dashboad>
  </BrowserRouter>,
  document.getElementById('root')
);
