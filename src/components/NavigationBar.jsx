import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'

export default function NavigationBar() {
    return (
        <nav>
            <Nav className='bg-dark'>
                <Container>
                    <Navbar.Brand>My Electronics</Navbar.Brand>
                </Container>
            </Nav>
        </nav>
    )
}
