import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSideBar from '../../Components/User/UserSideBar'
import UserAllOrder from '../../Components/User/UserAllOrder'

const UserAllOrdersPage = () => {
    return (
        <Container>
            <Row>
                <Col xs="3" sm="3" md="2">
                    <UserSideBar/>
                </Col>

                <Col xs="9" sm="9" md="10">
                    <UserAllOrder/>
                </Col>
            </Row>
        </Container>
    )
}

export default UserAllOrdersPage;
