import React, { useState } from 'react';
import './App.css';

let name: string = "Sandro";

function App() {
  const [income, setIncome] = useState('');
  const [text, setText] = useState('');
  const [incomeType, setIncomeType] = useState<String>('annualy');

  // This function will be triggered when a radio button is selected
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIncomeType(event.target.value);
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

    // Do something
    let incomeTemp:number = parseInt(income);

    if (isNaN(incomeTemp)) {
      alert("Is not Number");
    } else {
      if(incomeType === "annualy") {
        alert(income);
      } else {
        alert(incomeTemp * 12);
      }
    }
    setIncome('');
  }

  return <div className='App'>
    <h1>Income Tax</h1>
    <form className='myForm' onSubmit={submitForm}>
    <div className="container">
      <fieldset>
        <legend>Please select your income?</legend>
        <p>
          <input
            type="radio"
            name="drink"
            value="annualy"
            checked={incomeType === 'annualy'}
            id="annualy"
            onChange={radioHandler}
          />
          <label htmlFor="annualy">Annualy</label>
        </p>

        <p>
          <input
            type="radio"
            name="drink"
            value="monthly"
            checked={incomeType === 'monthly'}
            id="monthly"
            onChange={radioHandler}
          />
          <label htmlFor="monthly">Monthly</label>
        </p>
      </fieldset>
    </div>
      <input
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        type='text'
        className='input-income'></input>
      <button type='submit'>Submit</button>
    </form>
  </div>
}

export default App;
