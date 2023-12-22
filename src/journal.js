import { Table } from "react-bootstrap";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {JournalEntries, AdjustingEntries} from "./journal_entries";

const JournalEntry = ({entry}) => {
  return (
    <>
      <tr>
        <td>{entry.date}</td>
        {entry.indent === true ? <td>&nbsp;&nbsp;&nbsp;{entry.account}</td> : <td>{entry.account}</td>}
        <td>{entry.folio}</td>
        <td>{entry.debit}</td>
        <td>{entry.credit}</td>
      </tr>
    </>
  )
}

const GeneralJournal = () => {
  return (
    <>
      <Table style={{marginTop: 50}} border={2}>
        <thead>
          <tr>
            <td colSpan={6} style={{textAlign: 'center'}}>
              <h4>Dr. Nick Marasigan, MD</h4>
              <h4>General Journal</h4>
              <h4>for the month ended October 31. 2022</h4>
            </td>
          </tr>
          <tr>
            <th>Date</th>
            <th>Particulars</th>
            <th>folio</th>
            <th>Debit</th>
            <th>Credit</th>
          </tr>
        </thead>
        <tbody>
          {JournalEntries.map((entry, index) => {
            return <JournalEntry entry={entry} key={index}/>
          })}
        </tbody>
      </Table>
      <Table style={{marginTop: 50}} border={2}>
        <thead>
          <tr>
            <th colSpan={5}><h4>Adjusting Entries</h4></th>
          </tr>
          <tr>
            <th>Date</th>
            <th>Particulars</th>
            <th>folio</th>
            <th>Debit</th>
            <th>Credit</th>
          </tr>
        </thead>
        <tbody>
          {AdjustingEntries.map((entry, index) => {
            return <JournalEntry entry={entry} key={index}/>
          })}
        </tbody>
      </Table>
    </>
  )
}

export default GeneralJournal;