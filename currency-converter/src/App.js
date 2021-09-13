import React,{useffect}  from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_url ='https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=e3de60c22e734b741ac0'

function App() {
  return (
    <>
      
        <h1>Convert Currency</h1>
        <CurrencyRow/>
        <div className="equal">=</div>
        <CurrencyRow/>

    </>
  );
}

export default App;
