import React, {useState, useEffect} from 'react'

function useEffect() {

const [number, setNumber ] = useState(0);
const [secNumber, setSec] = useState(0);
const [result, setResult] = useState(0)

const somar = () => {
  const numberInt = parseInt(number);
  const secInt = parseInt(secNumber);
  
  setResult(numberInt + secInt)

}
  useEffect(() => {
    console.log("vapopoppop: ", number)

  }, [])

  return (
    <div>
      <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
      <input type="text" value={secNumber} onChange={e => setSec(e.target.value)}/>
      <button onClick={somar}>SOMAR</button>
      <input htmlFor="avb" value={result } ></input>
    </div>
  );
}

export default useEffect;
