import React, {useState} from 'react';
import './App.css';
import Cards from '../../components/Cards/Cards';
import AddExpenses from '../../components/AddExpenses/AddExpenses';
import Counter from '../../components/Counter/Counter';

function App() {

  const getRandomKey = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

  const [expenses, setExpenses] = useState([])
  const [nameExpense, setNameExpense] = useState('');
  const [priceExpense, setPriceExpense] = useState('');

  const addExpenses = () => {
    const newExp = {
      title: nameExpense,
      price: Number(priceExpense),
      id: getRandomKey(),
    }

    if (nameExpense.length <= 0 || priceExpense.length <= 0) {
      alert('Enter two values');
      return;
    }

    if (priceExpense <= 0) return;
    
    setExpenses([newExp, ...expenses]);
    setNameExpense('');
    setPriceExpense('');
  };

  const removeExpenses = (e, id) => {
    const i = expenses.findIndex( c => c.id === id);
    const copyExpenses = [...expenses];
    copyExpenses.splice(i, 1);
    setExpenses(copyExpenses);
  };

  const clickOnEnter = (e) => {
    if (e.keyCode === 13) {
      addExpenses();
    }
  };

  return (
    <div className="App">
      <div className="container">
        <AddExpenses
          onChangeName={e => setNameExpense(e.target.value)}
          valueName={nameExpense}
          onChangePrice={e => setPriceExpense(e.target.value)}
          valuePrice={priceExpense}
          clickAdd={addExpenses}
          pressEnter={clickOnEnter}
        />

        <Counter
          text={expenses.reduce((ac, item) => ac + item.price, 0)}
        />

        <Cards 
          expenses={expenses}
          remove={removeExpenses}
        />
      </div>
    </div>
  );
}

export default App;
