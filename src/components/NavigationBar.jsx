import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'

export default function NavigationBar() {
    return (
        <div className='custom-nav'>
            <Navbar className='bg-dark' expand="lg">
                <Container>
                    <Navbar.Brand>My Electronics</Navbar.Brand>
                    <Nav>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link>About</Nav.Link>
                        <Nav.Link href='/cart'>Cart</Nav.Link>
                        <Nav.Link href='/login'>Login</Nav.Link>
                        <Nav.Link>Products</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
