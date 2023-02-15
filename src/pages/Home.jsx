import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Container} from 'react-bootstrap'

export default function Home() {
    return (
        <div>
            <Header />
                <main>
                    <Container>
                        <h1>This is home page</h1>
                    </Container>
                </main>
            <Footer />
        </div>
    )
}
