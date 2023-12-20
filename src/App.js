import { Button, Container } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import GeneralJournal from "./journal";
import { useEffect, useState } from "react";

function App() {
  let [panel, setPanel] = useState(<GeneralJournal/>);

  return (
    <>
      <Container fluid className="bg-dark text-white p-2">
        <h1>Project in Accounting</h1>
        <button onClick={() => {setPanel(<GeneralJournal/>)}}>General Journal</button>
        <button onClick={() => {setPanel(<p>Hello World</p>)}}>General Ledger</button>
      </Container>

      <Container>
        {panel}
      </Container>
    </>
  );
}

export default App;
