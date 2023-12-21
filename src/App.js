import { Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import GeneralJournal from "./journal";
import { useState } from "react";

import Ledger from "./ledger";
import TrialBalance from "./trial_balance";
import Worksheet from "./worksheet";
import FinancialStatements from "./financial_statements";
import Home from "./home";

function App() {
  let [panel, setPanel] = useState(<Home/>);

  return (
    <>
      <Container fluid className="bg-dark text-white p-2">
        <h1>Project in Accounting</h1>
        <button onClick={() => {setPanel(<Home/>)}}>Home</button>
        <button>Chart of Accounts</button>
        <button onClick={() => {setPanel(<GeneralJournal/>)}}>General Journal</button>
        <button onClick={() => {setPanel(<Ledger/>)}}>General Ledger</button>
        <button onClick={() => {setPanel(<TrialBalance/>)}}>Trial Balance</button>
        <button onClick={() => {setPanel(<Worksheet/>)}}>10-Column Worksheet</button>
        <button onClick={() => {setPanel(<FinancialStatements/>)}}>Financial Statements</button>
      </Container>

      <Container>
        {panel}
      </Container>
    </>
  );
}

export default App;
