import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker, Steps } from 'antd';

function App() {
  return (
    <div style={{ margin: 100 }}>
      <h1>AntDesign Demo</h1>
      <hr /><br />
      <DatePicker />
      <Steps>
        <Steps.Step title="Paso 1"/>
        <Steps.Step title="Paso 2"/>
      </Steps>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
