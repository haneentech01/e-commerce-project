import React from 'react'
import UserAddressCard from './UserAddressCard'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserAllAddress = () => {
  return (
    <div>
        <div className="admin-content-text pb-4 mt-3"> دفتر العنوايين </div>
        
        <UserAddressCard/>
        <UserAddressCard/>
        <UserAddressCard />
        
        <Row className="justify-content-center">
                <Col sm="5" className="d-flex justify-content-center">
                    <Link to="/user/add-address" style={{ textDecoration: "none" }}>
                        <button className="btn-add-address">اضافه عنوان جديد</button>
                    </Link>
                </Col>
            </Row>
    </div>
  )
}

export default UserAllAddress
