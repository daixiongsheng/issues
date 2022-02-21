import React from 'react';
import ReactDOM from 'react-dom';
import { useRequest } from 'ahooks';
import { getDate } from './api/date';

function App() {
  const { data: date } = useRequest(() => getDate());
  return <div>date: {date}</div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
