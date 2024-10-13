import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAddBrand from '../../Components/Admin/AdminAddBrand'

const AdminAddBrandPage = () => {
    return (
        <Container>
            <Row>
                <Col xs="3" sm="3" md="2">
                    <AdminSideBar/>
                </Col>

                <Col xs="9" sm="9" md="10">
                    <AdminAddBrand/>
                </Col>
            </Row>
        </Container>
    )
}

export default AdminAddBrandPage;
