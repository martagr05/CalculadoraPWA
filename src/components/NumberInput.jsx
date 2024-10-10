import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Resultado from "./Resultado";
import { operaciones } from '../helpers/operaciones';

const NumberInput = () => {

  const [numeros, setNumeros]=useState({
    numero1: 0,
    numero2: 0,
  });

  const {
      handleChange, 
      suma, 
      resta, 
      multiplicacion, 
      division, 
      numero1, 
      numero2
  } = operaciones(numeros, setNumeros);

  return (
    <>
      <label className="mx-2" >
        Numero 1 :{" "} <input value={numero1} type="number" name="numero1" onChange={handleChange} />
      </label>
      <label className="mx-2">
        Numero 2 :{" "} <input value={numero2} type="number" name="numero2" onChange={handleChange} />
      </label>

      <Resultado operacion="Suma" calculo={suma()}/>
      <Resultado operacion="Resta" calculo={resta()}/>
      <Resultado operacion="Multiplicacion" calculo={multiplicacion()}/>
      <Resultado operacion="Division" calculo={division()}/>


    </>
  )
}

NumberInput.propTypes = {
    name: PropTypes.string

}

export default NumberInput
