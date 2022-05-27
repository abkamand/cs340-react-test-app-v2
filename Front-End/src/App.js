// Reference: https://www.geeksforgeeks.org/how-to-build-a-basic-crud-app-with-node-js-and-reactjs/
// Utilized code template from this setup guide, all credit to geeksforgeeks.com (allows use of tutorial/setup code with citation)

// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
  from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import {
  BrowserRouter as Router, Routes,
  Route, Link
} from "react-router-dom";

// Import other React Component
import CreatePerson from
  "./Components/create-person.component";
import EditPerson from
  "./Components/edit-person.component";
import PersonList from
  "./Components/person-list.component";

// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-person"}
                  className="nav-link">
                  bsg_people react test app
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-person"}
                    className="nav-link">
                    Create Person
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/person-list"}
                    className="nav-link">
                    Person List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/"
                    element={<CreatePerson />} />
                  <Route path="/create-person"
                    element={<CreatePerson />} />
                  <Route path="/edit-person/:id"
                    element={<EditPerson />} />
                  <Route path="/person-list"
                    element={<PersonList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
