import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminOrderDetalis from '../../Components/Admin/AdminOrderDetalis'


const AdminOrderDetalisPage = () => {
  return (
    <Container>
      <Row>
        <Col xs="3" sm="3" md="2">
          <AdminSideBar/>
        </Col>

        <Col xs="9" sm="9" md="10">
          <AdminOrderDetalis/>
        </Col>
      </Row>
    </Container>
  )
}

export default AdminOrderDetalisPage
