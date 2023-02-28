import React from 'react'
import { Container, Card } from 'react-bootstrap'

export default function ProductDetail(props) {
    return (
        <div>
        <Container className='d-flex-row justify-content-centered'>
            <Card>
                <Card.Header>{props.product.title}</Card.Header>
                <Card.Body>
                    <h5>{props.product.desc}</h5>
                    <p>{props.product.price}</p>
                </Card.Body>
            </Card>
        </Container>
        <h1>Customer Detail</h1>
        <Container className='d-flex-row justify-content-centered'>
            <Card>
                <Card.Header>{props.customer.name}</Card.Header>
                <Card.Body>
                    <h5>{props.customer.email}</h5>
                    <p>{props.customer.contact}</p>
                </Card.Body>
            </Card>
        </Container>
        </div>
    )
}
