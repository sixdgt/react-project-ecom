import React from 'react'
import {Card, Button} from 'react-bootstrap'

export default function Product({title, price, img, desc, made}) {
    return (
        <div>
            <Card>
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                    <Card.Img src={img} />
                </Card.Body>
                <Card.Footer>
                    <h4>Price <strong>{price}</strong></h4>
                    <h4>Made In <strong>{made}</strong></h4>
                    <h4>{desc}</h4>
                    <Button className='col-12 btn-secondary'>View Details</Button>
                </Card.Footer>
            </Card>
        </div>
    )
}
