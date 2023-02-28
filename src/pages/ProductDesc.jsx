import React from 'react'
import ProductDetail from '../components/ProductDetail'

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

    return (
        <div>
            <ProductDetail product={item} customer={customerDetail} />
        </div>
    )
}
