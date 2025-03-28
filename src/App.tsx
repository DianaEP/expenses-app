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
