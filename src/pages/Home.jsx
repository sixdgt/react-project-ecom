import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Product from '../components/Product'

export default function Home() {
    return (
        <Container>
            <h1>This is home page</h1>
            <hr />
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
