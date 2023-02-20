import React from 'react'
import {Row, Col, Card, Button, Form, Collapse} from 'react-bootstrap'

export default function Cart() {
    return (
        <Row className='d-flex pt-3 me-2 mr-2 px-5'>
            <Col md={8}>
                <Card>
                    <Card.Header>
                        <Card.Title>Item Title</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col><Card.Img src='/images/coffee.jpg' /></Col>
                            <Col>
                                <h4>Coffee Made in Nepal - Specially Eastern Nepal</h4>
                                <p>Brand: Coffee Nepal</p>
                            </Col>
                            <Col>
                                <h4>Rs. 1500.00</h4>
                                <p><strike>Rs. 1800.00</strike></p>
                                <p>-10%</p>
                            </Col>
                            <Col>
                                <div className='d-flex'>
                                    <Button>-</Button>
                                    <input type={'text'} />
                                    <Button>+</Button>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card.Title className='mb-3'>Order Summary</Card.Title>
                <Card.Title className='row mb-3'>
                    <Col>Subtotal (0 Item)</Col>
                    <Col>Rs. 0</Col>
                </Card.Title>
                <Row  className='mb-3'>
                    <Form className='d-flex gap-3'>
                        <Col>
                            <input type={'text'} placeholder={'Enter Voucher Code'} className={'form-control'} />
                        </Col>
                        <Col><Button>Apply</Button></Col>
                    </Form>
                </Row>
                <Card.Title className='row mb-3'>
                    <Col>Total (0 Item)</Col>
                    <Col>Rs. 0</Col>
                </Card.Title>
                <Button variant='success' className='col-12'>Proceed to Checkout</Button>
            </Col>
        </Row>
    )
}
