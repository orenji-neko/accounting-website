import React from "react"
import { Table } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const Entry = ({debit_date = '', debit = '', credit_date = '', credit = ''}) => {
  return {
    debit_date,
    debit,
    credit_date,
    credit
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