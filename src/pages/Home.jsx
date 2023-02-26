import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import Product from '../components/Product'
import Input from '../components/Input'

export default function Home() {
    return (
        <Container className='mt-4 mb-4'>
            <div>
                <Form>
                    <Row>
                        <Col md={10}>
                            <Form.Group>
                                <Input 
                                type={'text'} 
                                name={'search'} 
                                placeholder={'Search'}
                                classes={'mb-4 col-12 form-control'}
                            />
                            </Form.Group>
                        </Col>
                        <Col md={2}>
                            <Button className='col-12'>SEARCH</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
            <Row className='mb-3'>
                <Col>
                    <Product
                        title={"Coffee"}
                        img={'/images/coffee.jpg'}
                        desc={"Coffee Nepal"}
                        price={"Rs. 250"}
                        made={"Nepal"} />
                </Col>
                <Col>
                    <Product 
                        title={"Cup"}
                        img={'/images/cup.jpg'}
                        desc={"Coffee Nepal"}
                        price={"Rs. 100"}
                        made={"Nepal"} />
                </Col>
                <Col>
                    <Product 
                        title={"Beans"}
                        img={'/images/beans.jpg'}
                        desc={"Coffee Nepal"}
                        price={"Rs. 700"}
                        made={"Nepal"} />
                </Col>
            </Row>
        </Container>
    )
}
