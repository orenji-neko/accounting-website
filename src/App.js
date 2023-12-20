import { Container } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import GeneralJournal from "./journal";

function App() {
  return (
    <>
      <Container fluid className="bg-dark text-white p-2">
        <h1>Project in Accounting</h1>
      </Container>
      <Container>
        <GeneralJournal/>
      </Container>
    </>
  );
}

export default App;
