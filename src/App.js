import { Container } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className="p-3">
      <Navbar.Brand href="#home">Project in Accounting</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#features">General Journal</Nav.Link>
        <Nav.Link href="#features">General Ledger</Nav.Link>
        <Nav.Link href="#features">Trial Balance</Nav.Link>
        <Nav.Link href="#features">Worksheet</Nav.Link>
        <Nav.Link href="#features">Financial Statements</Nav.Link>
      </Nav>
    </Navbar>
  );
 };

function App() {
  return (
    <>
      <Header/>
      <Container>
        <h1>On Progress</h1>
      </Container>
    </>
  );
}

export default App;
