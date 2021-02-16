import React, {useState} from 'react'

function useState() {

const [number, setNumber ] = useState();
const [secNumber, setSec] = useState();
const [result, setResult] = useState()

const somar = () => {
  const numberInt = parseInt(number);
  const secInt = parseInt(secNumber);
  
  setResult(numberInt + secInt)

}

  return (
    <div>
      <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
      <input type="text" value={secNumber} onChange={e => setSec(e.target.value)}/>
      <button onClick={somar}>SOMAR</button>
      <input htmlFor="avb" value={result } ></input>
    </div>
  );
}

export default useState ;
