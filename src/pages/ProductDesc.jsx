import React, { useState, useEffect } from 'react'
import ProductDetail from '../components/ProductDetail'
import Axios from 'axios'
import {Container, Card, Row, Col} from 'react-bootstrap'

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
        const products = data;
        setProducts(products);
        console.log(products);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <ProductDetail product={item} customer={customerDetail} />
            <Container>
                <Row>
                {/* {products.map((product) => {
                    <h1>{product.title}</h1>
                })} */}
                </Row>
            </Container>
        </div>
    )
}
