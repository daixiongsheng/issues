import React from 'react';
import ReactDOM from 'react-dom';
import { useRoutes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useRequest } from 'ahooks';
import { getDate } from './api/date';

const A = () => <div>A</div>;
const B = () => <div>B</div>;
const C = () => <div>C</div>;
const routes = [
  {
    path: '/',
    element: <A />,
  },
  {
    path: '/b',
    element: <B />,
  },
  {
    path: '/c',
    element: <C />,
  },
];
function App() {
  const { data: date } = useRequest(() => getDate());
  return useRoutes(routes);
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById('root'),
);
