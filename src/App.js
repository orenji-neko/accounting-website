import { Button, Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import GeneralJournal from "./journal";
import { useState } from "react";

import Ledger from "./ledger";
import TrialBalance from "./trial_balance";
import Worksheet from "./worksheet";
import FinancialStatements from "./financial_statements";
import Home from "./home";
import Chart from "./chart";

function App() {
  let [panel, setPanel] = useState(<Home/>);

  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Project in Accounting</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={() => {setPanel(<Home/>)}}>Home</Nav.Link>
            <Nav.Link href="#chart" onClick={()=>{setPanel(<Chart/>)}}>Chart of Accounts</Nav.Link>
            <Nav.Link href="#generaljournal" onClick={() => {setPanel(<GeneralJournal/>)}}>General Journal</Nav.Link>
            <Nav.Link href="#generalledger" onClick={() => {setPanel(<Ledger/>)}}>General Ledger</Nav.Link>
            <Nav.Link href="#trialbalance" onClick={() => {setPanel(<TrialBalance/>)}}>Trial Balance</Nav.Link>
            <Nav.Link href="#worksheet" onClick={() => {setPanel(<Worksheet/>)}}>10-Column Worksheet</Nav.Link>
            <Nav.Link href="#financials" onClick={() => {setPanel(<FinancialStatements/>)}}>Financial Statements</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Container>
        {panel}
      </Container>
    </>
  );
}

export default App;
