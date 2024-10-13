import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSideBar from '../../Components/User/UserSideBar'
import UserAllAddress from '../../Components/User/UserAllAddress'

const UserAllAddresPage = () => {
  return (
        <Container>
            <Row>
                <Col xs="3" sm="3" md="2">
                    <UserSideBar/>
                </Col>

                <Col xs="9" sm="9" md="10">
                    <UserAllAddress/>
                </Col>
            </Row>
        </Container>
    )
}

export default UserAllAddresPage
