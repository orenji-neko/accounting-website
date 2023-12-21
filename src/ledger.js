import React from "react"
import { Table } from "react-bootstrap"
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
      <Table>
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
    Entry({debit_date: 'Oct. 1', debit: 39000, credit_date: 'Oct. 31', credit: 35000}),
    Entry({debit_date: 'Oct. 7', debit: 17000}),
    Entry({debit: 56000}),
    Entry({debit: 21000})
  ]
}));

// Prepaid Insurance
accounts.push(Account({
  code: 140,
  title: 'Prepaid Insurance',
  entries: [
    Entry({debit_date: 'Oct. 2', debit: 20000, credit_date: 'Oct. 31', credit: 1667}),
    Entry({debit: 18333})
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

// Accumulated Depreciation - Building
accounts.push(Account({
  code: 165,
  title: 'Accumulated Depreciation - Building',
  entries: [
    Entry({credit_date: 'Oct. 31', credit: 50000})
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

// Accumulated Depreciation - Equipment
accounts.push(Account({
  code: 175,
  title: 'Accumulated Depreciation - Equipment',
  entries: [
    Entry({credit_date: 'Oct. 31', credit: 9000})
  ]
}));

const Ledger = () => {
  return (
    <>
      {accounts.map((entry, index) => {
        return entry
      })}
    </>
  )
}

export default Ledger;