import { Table } from "react-bootstrap";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import JournalEntries from "./journal_entries";

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
      <div style={{textAlign: "center"}}>
        <h2>General Journal</h2>
        <h4>For the month ended October 31. 2022</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Particulars</th>
            <th>folio</th>
            <th>Debit</th>
            <th>Credit</th>
          </tr>
        </thead>
        <tbody>
          {JournalEntries.map((entry) => {
            return <JournalEntry entry={entry}/>
          })}
        </tbody>
      </Table>
    </>
  )
}

export default GeneralJournal;