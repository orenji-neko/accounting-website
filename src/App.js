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
              <h4 style={{marginBottom: -2}}>Dr. Nick Marasigan</h4>
              <p>Medical Doctor</p>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link className="text-nowrap" href="#home" onClick={() => {setPanel(<Home/>)}}>Home</Nav.Link>
              <Nav.Link className="text-nowrap" href="#chart" onClick={()=>{setPanel(<Chart/>)}}>Chart of Accounts</Nav.Link>
              <Nav.Link className="text-nowrap" href="#generaljournal" onClick={() => {setPanel(<GeneralJournal/>)}}>General Journal</Nav.Link>
              <Nav.Link className="text-nowrap" href="#generalledger" onClick={() => {setPanel(<Ledger/>)}}>General Ledger</Nav.Link>
              <Nav.Link className="text-nowrap" href="#trialbalance" onClick={() => {setPanel(<TrialBalance/>)}}>Trial Balance</Nav.Link>
              <Nav.Link className="text-nowrap" href="#worksheet" onClick={() => {setPanel(<Worksheet/>)}}>10-Column Worksheet</Nav.Link>
              <Nav.Link className="text-nowrap" href="#financials" onClick={() => {setPanel(<FinancialStatements/>)}}>Financial Statements</Nav.Link>
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
