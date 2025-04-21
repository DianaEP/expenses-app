// import { format } from 'date-fns'
import './App.css'
import Expenses from './components/expenses/Expenses'
import NewExpense from './components/newExpense/NewExpense'
import { ExpensesContextProvider } from './store/expensesContext'


// const data = [
//   { id: '1', title: "Groceries", amount: 50, date: format(new Date(), 'MMMM dd, yyyy')},
//   { id: '2', title: "Rent", amount: 1000, date: format(new Date(), 'MMMM dd, yyyy') }
// ]


function App() {
  

  return (
    <ExpensesContextProvider>
      <NewExpense />
      <Expenses />
    </ExpensesContextProvider>
  )
}

export default App




// function App() {
//   const expenses = [
//     {
//       id: 'e1',
//       title: 'Toilet Paper',
//       amount: 94.12,
//       date: new Date(2020, 7, 14),
//     },
//     { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
//     {
//       id: 'e3',
//       title: 'Car Insurance',
//       amount: 294.67,
//       date: new Date(2021, 2, 28),
//     },
//     {
//       id: 'e4',
//       title: 'New Desk (Wooden)',
//       amount: 450,
//       date: new Date(2021, 5, 12),
//     },
//   ];
  

//   return (
//     <div>
//       <h2>Let's get started!</h2>
//       <div className='expenses'>
//         <Expenses expenses={expenses}/>
//       </div>
//     </div>
//   )
// }

// export default App

