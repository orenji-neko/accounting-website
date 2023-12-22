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

  const backgroundstyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/background.png'})`,
    backgroundSize: "cover",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: "-1",
  };

  return (
    <>
      <div style={backgroundstyle}></div>
      <div>
        <Navbar bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="#home" onClick={() => {setPanel(<Home/>)}}>
              <h4 style={{marginBottom: -2}}>DR. NICK MARASIGAN</h4>
              <p>MEDICAL DOCTOR</p>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home" onClick={() => {setPanel(<Home/>)}}>HOME</Nav.Link>
              <Nav.Link href="#chart" onClick={()=>{setPanel(<Chart/>)}}>CHART OF ACCOUNTS</Nav.Link>
              <Nav.Link href="#generaljournal" onClick={() => {setPanel(<GeneralJournal/>)}}>GENERAL JOURNAL</Nav.Link>
              <Nav.Link href="#generalledger" onClick={() => {setPanel(<Ledger/>)}}>GENERAL LEDGER</Nav.Link>
              <Nav.Link href="#trialbalance" onClick={() => {setPanel(<TrialBalance/>)}}>TRIAL BALANCE</Nav.Link>
              <Nav.Link href="#worksheet" onClick={() => {setPanel(<Worksheet/>)}}>10-COLUMN WORKSHEET</Nav.Link>
              <Nav.Link href="#financials" onClick={() => {setPanel(<FinancialStatements/>)}}>FINANCIAL STATEMENTS</Nav.Link>
            </Nav>
          </Container>
        </Navbar>


        <Container>
          {panel}
        </Container>
      </div>
    </>
  );
}

export default App;
