import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSideBar from '../../Components/User/UserSideBar'
import UserFavoriteProduct from '../../Components/User/UserFavoriteProduct'

const UserFavoriteProductPage = () => {
  return (
        <Container>
            <Row>
                <Col xs="3" sm="3" md="2">
                    <UserSideBar/>
                </Col>

                <Col xs="9" sm="9" md="10">
                    <UserFavoriteProduct/>
                </Col>
            </Row>
        </Container>
    )
}

export default UserFavoriteProductPage
