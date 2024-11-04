import { useState } from 'react'

import './bmi.css'

const BmiCalculator = () => {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [value, setValue] = useState('')

  const heighthandle = (event) => {
    setHeight(event.target.value)
  }

  const weightHandle = (event) => {
    setWeight(event.target.value)
  }

  const calculate = () => {
    const bmi = weight / (height * height)
    setValue(bmi.toFixed(2))
    console.log(setValue)
  }

  const reset = () => {
    setHeight('')
    setWeight('')
    setValue('')
  }

    let bmiCategory = ''

    const category = (value)=>{
        
        const numbValue = parseFloat(value)
        if(numbValue <18.5){
            bmiCategory = "You are Underweight"
            return bmiCategory
        }else if(numbValue >= 18.5 && numbValue < 24.9){
            bmiCategory = "You are Normalweight"
            return bmiCategory
        }else if(numbValue >= 25 && numbValue < 29.9){
            bmiCategory = "You are Overweight"
            return bmiCategory
        }
            bmiCategory = "You are Obese"
            return bmiCategory
        
    }

    category(value)



  return (
    <div className="main-container">
      <h2>BMI CALCULATOR</h2>
      <div className="input-container">
        <span>height</span>
        <input
          type="text"
          className="input-container"
          onChange={heighthandle}
          value={height}
        />
        <span>weight</span>
        <input
          type="text"
          className="input-container"
          onChange={weightHandle}
          value={weight}
        />
        <button className="input-container" onClick={calculate}>
          Calculate
        </button>
        <button className="input-container" onClick={reset}>
          Reset
        </button>
        {value && <div >
            <h4>your calculated BMI is :{value}</h4>
            <h5>{bmiCategory}</h5>
        </div>}
      </div>
    </div>
  )
}

export default BmiCalculator
