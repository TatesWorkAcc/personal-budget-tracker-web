import React, { useState } from "react";

// add a reset button for the income and expenses.

function BudgetTracker() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [income, setIncome] = useState("");

  const [totalHousing, setTotalHousing] = useState(0);
  const [housing, setHousing] = useState("");

  const [totalTransportation, setTotalTransportation] = useState(0);
  const [transportation, setTransportation] = useState("");

  const [totalFood, setTotalFood] = useState(0);
  const [food, setFood] = useState("");

  const [totalHealthcare, setTotalHealthcare] = useState(0);
  const [healthcare, setHealthcare] = useState("");

  const [totalDebt, setTotalDebt] = useState(0);
  const [debt, setDebt] = useState("");

  const [totalOther, setTotalOther] = useState(0);
  const [other, setOther] = useState("");

  const [totalAfterExpenses, setTotalAfterExpenses] = useState(0);

  const [totalExpenses, setTotalExpenses] = useState(0);

  function handleTotalIncome() {
    setTotalIncome((prevTotal) => prevTotal + Number(income));
    setTotalAfterExpenses((prevTotalExp) => prevTotalExp + income);
    setIncome("");
    console.log(totalIncome);
  }

  function handleResetExpenses() {
    setTotalExpenses(
      (t) =>
        t -
        Number(totalHousing) -
        Number(totalTransportation) -
        Number(totalFood) -
        Number(totalHealthcare) -
        Number(totalDebt) -
        Number(totalOther),
    );
    setTotalAfterExpenses(
      (t) =>
        t +
        Number(totalHousing) +
        Number(totalTransportation) +
        Number(totalFood) +
        Number(totalHealthcare) +
        Number(totalDebt) +
        Number(totalOther),
    );
    setTotalHousing(0);
    setTotalTransportation(0);
    setTotalFood(0);
    setTotalHealthcare(0);
    setTotalDebt(0);
    setTotalOther(0);
  }
  function handleResetIncome() {
    setTotalAfterExpenses((t) => t - totalIncome);
    setTotalIncome(0);
  }

  function handleAfterExpenses() {
    setTotalAfterExpenses(
      (prevTotalExp) =>
        prevTotalExp -
        Number(housing) -
        Number(transportation) -
        Number(food) -
        Number(healthcare) -
        Number(debt) -
        Number(other),
    );
    setTotalExpenses(
      (prevTotalExp) =>
        prevTotalExp +
        Number(housing) +
        Number(transportation) +
        Number(food) +
        Number(healthcare) +
        Number(debt) +
        Number(other),
    );

    setTotalHousing((TH) => TH + Number(housing));
    setTotalTransportation((TT) => TT + Number(transportation));
    setTotalFood((TH) => TH + Number(food));
    setTotalHealthcare((TH) => TH + Number(healthcare));
    setTotalDebt((TH) => TH + Number(debt));
    setTotalOther((TH) => TH + Number(other));

    setHousing("");
    setTransportation("");
    setFood("");
    setHealthcare("");
    setDebt("");
    setOther("");
  }

  return (
    <div className="transactionform-container">
      {/* Input Income */}
      <div className="income-input-container">
        <h1>Input your income</h1>
        <input
          type="number"
          placeholder="Type income here"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
          className="income-add-input"
        ></input>
        <button onClick={handleTotalIncome} className="income-add-button">
          add
        </button>
        <h2 className="current-income-1">Current Income: {totalIncome}$</h2>
        <button onClick={handleResetIncome} className="reset-button">
          Reset Income
        </button>
      </div>
      {/* Input Expenses */}
      <div className="expense-input-container">
        <h1>Input your expenses</h1>
        <label className="expense">Housing:</label>
        <input
          type="number"
          placeholder="Housing expenses"
          value={housing}
          onChange={(e) => setHousing(Number(e.target.value))}
          className="expense-input"
        ></input>{" "}
        <br></br>
        <label className="expense">Transportation:</label>
        <input
          type="number"
          placeholder="Transportation expenses"
          value={transportation}
          onChange={(e) => setTransportation(Number(e.target.value))}
          className="expense-input"
        ></input>{" "}
        <br></br>
        <label className="expense">Food:</label>
        <input
          type="number"
          placeholder="Food expenses"
          value={food}
          onChange={(e) => setFood(Number(e.target.value))}
          className="expense-input"
        ></input>{" "}
        <br></br>
        <label className="expense">Healthcare:</label>
        <input
          type="number"
          placeholder="Healthcare expenses"
          value={healthcare}
          onChange={(e) => setHealthcare(Number(e.target.value))}
          className="expense-input"
        ></input>{" "}
        <br></br>
        <label className="expense">Debt Payments:</label>
        <input
          type="number"
          placeholder="Debt payment expenses"
          value={debt}
          onChange={(e) => setDebt(Number(e.target.value))}
          className="expense-input"
        ></input>{" "}
        <br></br>
        <label className="expense">Other Expenses:</label>
        <input
          type="number"
          placeholder="Other expenses"
          value={other}
          onChange={(e) => setOther(Number(e.target.value))}
          className="expense-input"
        ></input>{" "}
        <br></br>
        <button onClick={handleAfterExpenses} className="expense-button">
          Add
        </button>
      </div>
      {/* Expenses Data */}
      <div className="expense-data-container">
        <h1>Expenses data</h1>
        <h2 className="data-label">Housing: </h2>
        <h3 className="data">{totalHousing}$</h3>
        <h2 className="data-label">Transportation: </h2>{" "}
        <h3 className="data">{totalTransportation}$</h3>
        <h2 className="data-label">Food: </h2>{" "}
        <h3 className="data">{totalFood}$</h3>
        <h2 className="data-label">Healthcare: </h2>{" "}
        <h3 className="data">{totalHealthcare}$</h3>
        <h2 className="data-label">Debt Payments: </h2>{" "}
        <h3 className="data">{totalDebt}$</h3>
        <h2 className="data-label">Other Expenses: </h2>{" "}
        <h3 className="data">{totalOther}$</h3>
        <button onClick={handleResetExpenses} className="reset-button">
          Reset Expenses
        </button>
        {/* Total Data */}
        <h1 className="total-expenses">Total expenses: </h1>{" "}
        <h2 className="total-expenes-data">{totalExpenses}$</h2>
      </div>
      <div className="total-container"></div>
      <h1 className="total-income-end">Total income:</h1>
      <h2 className="total-data-end">{totalIncome}$</h2>
      <h1 className="total-text">Total income after expenses: </h1>{" "}
      <h2 className="total-data">{totalAfterExpenses}$</h2>
    </div>
  );
}

export default BudgetTracker;
