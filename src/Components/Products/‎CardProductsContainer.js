import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTiltle from '../Uitily/SubTiltle'
import ProductCard from './ProductCard'

const CardProductsContainer = ({ title, btnTitle, pathText, products }) => {
    return (
            <Container>
            {
                products ?
                    (<SubTiltle title={title} btnTitle={btnTitle} pathText={pathText} />)
                    : null
            }
                <Row className='my-2 d-flex justify-content-between'>
                    {
                        products ? (
                            products.map((item, index) => <ProductCard key={index} item={item} />)
                        ) : null
                    }
                </Row>
            </Container>
    )
}

export default CardProductsContainer
