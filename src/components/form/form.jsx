import React, {useState} from 'react';
import Utils from '../../utils/utils'
import "./css/form.scss"

const Form = () =>{
    const [n, setN] = useState("");
    const [prime, setPrime] = useState("");
    const [multipleOf3, setMultipleOf3] = useState("");
    const utils = Utils();
  
    const handleNChange = (event) =>{
      setN(event.target.value);
    }
  
    const handleSubmit = (event) =>{
      event.preventDefault();
      setPrime(utils.getNthPrime(Number(n)));
      setMultipleOf3(utils.getNthMultipleOf3(Number(n)));
    }
  
    return (
      <form className='form-container p-4' onSubmit={handleSubmit}>
        <label className='fs-4 '>
          Ingrese el valor de n:
          <input className="mx-3" type="number" min="1" max="10" placeholder='nth' value={n} onChange={handleNChange} />
        </label>
        <button type="submit" className='btn btn-danger m-3'>Calcular</button>
        {prime && <p className="fs-4">El {n}-ésimo número primo es {prime}</p>}
        {multipleOf3 && <p className="fs-4">El {n}-ésimo múltiplo de 3 es {multipleOf3}</p>}
      </form>
    );
}

export default Form;