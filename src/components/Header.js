import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Dad Jokes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">
                <i className="fas fa-home"></i> Home
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
