import { Table } from "react-bootstrap";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import JournalEntries from "./journal_entries";

const JournalEntry = ({entry}) => {
  return (
    <>
      <tr>
        <td>{entry.date}</td>
        {entry.indent === true ? <td>&nbsp;&nbsp;{entry.account}</td> : <td>{entry.account}</td>}
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
      <Table>
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