import { Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import GeneralJournal from "./journal";
import { useState } from "react";

import Ledger from "./ledger";

function App() {
  let [panel, setPanel] = useState(<GeneralJournal/>);

  return (
    <>
      <Container fluid className="bg-dark text-white p-2">
        <h1>Project in Accounting</h1>
        <button onClick={() => {setPanel(<GeneralJournal/>)}}>General Journal</button>
        <button onClick={() => {setPanel(<Ledger/>)}}>General Ledger</button>
      </Container>

      <Container>
        {panel}
      </Container>
    </>
  );
}

export default App;
