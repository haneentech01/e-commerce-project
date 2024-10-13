import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSideBar from '../../Components/User/UserSideBar'
import UserAddAddress from '../../Components/User/UserAddAddress'

const UserAddAddressPage = () => {
  return (
        <Container>
            <Row>
                <Col xs="3" sm="3" md="2">
                    <UserSideBar/>
                </Col>

                <Col xs="9" sm="9" md="10">
                    <UserAddAddress/>
                </Col>
            </Row>
        </Container>
    )
}

export default UserAddAddressPage
