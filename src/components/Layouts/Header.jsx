import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className=" bgnav">
      <Container className="mlmr">
        <Nav.Link className="logo" href="">
          LOGO
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto textall">
            <Nav.Link href="/library">Library</Nav.Link>
            <Nav.Link href="/pervious">Previous</Nav.Link>
            <Nav.Link href="/next">Next</Nav.Link>
            <Nav.Link href="/logout">logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

// function ColorSchemesExample() {
//   return (
//     <>
//       <Navbar className="bgnav">
//         <Container>
//           <Nav.Link className="logo" href="">
//             LOGO
//           </Nav.Link>

//           <Nav className="ms-auto textall">
//             <Nav.Link href="/library">Library</Nav.Link>
//             <Nav.Link href="/pervious">Previous</Nav.Link>
//             <Nav.Link href="/next">Next</Nav.Link>
//             <Nav.Link href="/logout">logout</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default ColorSchemesExample;
