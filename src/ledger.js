import React from "react"
import { Tab, Table } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const Entry = ({debit_date = '', debit = '', credit_date = '', credit = ''}) => {
  return {
    debit_date,
    debit,
    credit_date,
    credit,
  }
}

const Account = ({code, title, entries}) => {
  return (
    <>
      <Table style={{marginTop: 50}} border={2}>
        <thead>
          <tr>
            <th>{code}</th>
            <th colSpan={3} style={{textAlign: 'center'}}>{title}</th>
          </tr>
          <tr>
            <th>Date</th>
            <th>Debit</th>
            <th>Date</th>
            <th>Credit</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => {
            return (
            <>
              <tr>
                <td>{entry.debit_date}</td>
                <td>{entry.debit}</td>
                <td>{entry.credit_date}</td>
                <td>{entry.credit}</td>
              </tr>
            </>
          )})}
        </tbody>
      </Table>
    </>
  )
}

let accounts = [];

// Cash
accounts.push(Account({
  code: 110,
  title: 'Cash',
  entries: [
    Entry({debit_date: 'Oct. 1', debit: 250000, credit_date: 'Oct. 1', credit: 50000}),
    Entry({debit_date: 'Oct. 4', debit: 117000, credit_date: 'Oct. 1', credit: 59000}),
    Entry({debit_date: 'Oct. 12', debit: 90000, credit_date: 'Oct. 2', credit: 20000}),
    Entry({debit_date: 'Oct. 25', debit: 113000, credit_date: 'Oct. 10', credit: 73000}),
    Entry({credit_date: 'Oct. 21', credit: 23000}),
    Entry({credit_date: 'Oct. 23', credit: 3000}),
    Entry({credit_date: 'Oct. 27', credit: 13000}),
    Entry({credit_date: 'Oct. 30', credit: 200000}),
    Entry({credit_date: 'Oct. 30', credit: 15000}),
    Entry({debit: 570000, credit: 456000}),
    Entry({debit: 114000})
  ]
}));

// Accounts Receivable
accounts.push(Account({
  code: 120,
  title: 'Accounts Receivable',
  entries: [
    Entry({debit_date: 'Oct. 18', debit: 317000, credit_date: 'Oct. 25', credit: 113000}),
    Entry({debit: 204000})
  ]
}));

// Medical Supplies
accounts.push(Account({
  code: 130,
  title: 'Medical Supplies',
  entries: [
    Entry({debit_date: 'Oct. 1', debit: 39000}),
    Entry({debit_date: 'Oct. 7', debit: 17000}),
    Entry({debit: 56000}),
  ]
}));

// Prepaid Insurance
accounts.push(Account({
  code: 140,
  title: 'Prepaid Insurance',
  entries: [
    Entry({debit_date: 'Oct. 2', debit: 20000}),
  ]
}));

// Land
accounts.push(Account({
  code: 150,
  title: 'Land',
  entries: [
    Entry({debit_date: 'Oct. 1', debit: 250000})
  ]
}));

// Medical Building
accounts.push(Account({
  code: 160,
  title: 'Medical Building',
  entries: [
    Entry({debit_date: 'Oct. 1', debit: 1000000})
  ]
}));

// Medical Equipment
accounts.push(Account({
  code: 170,
  title: 'Medical Equipment',
  entries: [
    Entry({debit_date: 'Oct. 1', debit: 420000}),
    Entry({debit_date: 'Oct. 24', debit: 45000}),
    Entry({debit: 465000})
  ]
}));

// 24% Notes Payable
accounts.push(Account({
  code: 210,
  title: '24% Notes Payable',
  entries: [
    Entry({credit_date: 'Oct. 1', credit: 400000})
  ]
}));

// 20% Notes Payable
accounts.push(Account({
  code: 220,
  title: '20% Notes Payable',
  entries: [
    Entry({credit_date: 'Oct. 1', credit: 1200000})
  ]
}));

// Accounts Payable
accounts.push(Account({
  code: 230,
  title: 'Accounts Payable',
  entries: [
    Entry({debit_date: 'Oct. 27', debit: 13000, credit_date: 'Oct. 7', credit: 17000}),
    Entry({credit_date: 'Oct. 24', credit: 45000}),
    Entry({credit: 62000}),
    Entry({credit: 49000})
  ]
}));

// Marasigan, Capital
accounts.push(Account({
  code: 310,
  title: 'Marasigan, Capital',
  entries: [
    Entry({credit_date: 'Oct. 1', credit: 250000})
  ]
}));

// Marasigan, Withdrawals
accounts.push(Account({
  code: 320,
  title: 'Marasigan, Withdrawals',
  entries: [
    Entry({debit_date: 'Oct. 30', debit: 200000})
  ]
}));

// Medical Revenues
accounts.push(Account({
  code: 410,
  title: 'Medical Revenues',
  entries: [
    Entry({credit_date: 'Oct. 4', credit: 117000}),
    Entry({credit_date: 'Oct. 18', credit: 317000}),
    Entry({credit: 434000})
  ]
}));

// Research Revenues
accounts.push(Account({
  code: 420,
  title: 'Research Revenues',
  entries: [
    Entry({credit_date: 'Oct. 12', credit: 90000}),
  ] 
}));

// Salaries Expense
accounts.push(Account({
  code: 510,
  title: 'Salaries Expense',
  entries: [
    Entry({debit_date: 'Oct. 10', debit: 73000}),
  ]
}));

// Repairs Expense
accounts.push(Account({
  code: 530,
  title: 'Repairs Expense',
  entries: [
    Entry({debit_date: 'Oct. 21', debit: 23000}),
  ]
}));

// Association Dues Expense
accounts.push(Account({
  code: 550,
  title: 'Association Dues Expense',
  entries: [
    Entry({debit_date: 'Oct. 30', debit: 15000}),
  ]
}));

// Telephone Expense
accounts.push(Account({
  code: 560,
  title: 'Telephone Expense',
  entries: [
    Entry({debit_date: 'Oct. 23', debit: 3000}),
  ]
}));

const Ledger = () => {
  return (
    <>
      <Table border={2} style={{marginTop: 50}}>
        <thead>
          <tr>
            <td>
              <div style={{textAlign: "center"}}>
              <h4>Dr. Nick Marasigan, MD</h4>
              <h4>General Ledger</h4>
              <h4>For the month ended October 31. 2022</h4>
            </div>
            </td>
          </tr>
        </thead>
      </Table>
      {accounts.map((entry, index) => {
        return entry
      })}
    </>
  )
}

export default Ledger;