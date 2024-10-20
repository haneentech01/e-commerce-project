import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSideBar from '../../Components/User/UserSideBar'
import UserProfile from '../../Components/User/UserProfile'

const UserProfilePage = () => {
  return (
        <Container>
            <Row>
                <Col xs="3" sm="3" md="2">
                    <UserSideBar/>
                </Col>

                <Col xs="9" sm="9" md="10">
                    <UserProfile/>
                </Col>
            </Row>
        </Container>
    )
}

export default UserProfilePage
