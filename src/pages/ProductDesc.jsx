import React, { useState, useEffect } from 'react'
import ProductDetail from '../components/ProductDetail'
import Axios from 'axios'
import {Container,Card, Row, Col} from 'react-bootstrap'

export default function ProductDesc() {
    const item = {
        title: "Shoe Cleaner", 
        desc: "Leather Shoe Cleaner",
        price: 2000
    }
    
    const customerDetail = {
        name: "Shree Nath",
        email: "shreenath@gmail.com",
        contact: 98765431210
    }

    const [products, setProducts] = useState([]);

    const fetchProducts = async() => {
        const { data } = await Axios.get('https://dummyjson.com/products');
        const lists = data.products;
        setProducts(lists);
        console.log(lists);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <ProductDetail product={item} customer={customerDetail} />
            <Container>
                <Row>
                {products.map((product) => (
                    <Col md="3" className='mb-3'>
                        <Card>
                            <Card.Header><h5>{product.title}</h5></Card.Header>
                            <Card.Body>
                                <h6>{product.description}</h6>
                            </Card.Body>
                            <Card.Footer>
                                <p>Price: {product.price}</p>
                                <p>Brand: {product.brand}</p>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
                </Row>
            </Container>
        </div>
    )
}
