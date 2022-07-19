
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"
import NavDropdown from 'react-bootstrap/NavDropdown';
import AuthContext from "../../Context/AuthContext"

function Menu(props) {
  return(
  <>
    <AuthContext.Consumer>
      {
        context =>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">GUITAR SHOP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/galeria">Galeria</Nav.Link>
                <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                <Nav.Link as={Link} to="/articulos">Articulos</Nav.Link>
                

                {
                  !context.isLogin &&
                  <>
                    <Nav.Link as={Link} to="/ingresar">Login</Nav.Link>
                    <Nav.Link as={Link} to="/registro">Registro</Nav.Link>
                  </>
                }
                {
                  context.isLogin &&
                  <>
                    <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
                    <NavDropdown title="Menu" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/productos/alta">Alta</NavDropdown.Item>

                  <NavDropdown.Divider />

                </NavDropdown>
                    <Nav.Link onClick={context.logoutUser}>Salir</Nav.Link>


                  </>
                }

              </Nav>
            </Navbar.Collapse>

            {
              context.isLogin &&
              <div>Hola {context?.userInfo?.name}</div>
            }
          </Navbar>
      }
    </AuthContext.Consumer>

  </>

    )
}
export default Menu