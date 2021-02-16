
import React, {useState} from 'react';

import useStore from  './somaReducer'

function ReducerHook() {

const [number, setNumber ] = useState('');
const [secNumber, setSec] = useState('');

const [store, dispatch] = useStore()


const somar = () => {
  const numberInt = parseInt(number);
  const secInt = parseInt(secNumber);

  dispatch({
    type: 'SOMA',
    payload: numberInt + secInt
})

}


  return (
    <div>
      <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
      <input type="text" value={secNumber} onChange={e => setSec(e.target.value)}/>
      <button onClick={somar}>SOMAR</button>
      <input htmlFor="" value={store.result} ></input>
    </div>
  );
}

export default ReducerHook;

