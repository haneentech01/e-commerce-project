import React from 'react'
import { Row } from 'react-bootstrap'
import UserAllOrderItem from './UserAllOrderItem'

const UserAllOrder = () => {
  return (
    <div>
        <div className="admin-content-text pb-4 mt-3">اهلا محمد على</div>
        <Row>
            <UserAllOrderItem/>
            <UserAllOrderItem/>
            <UserAllOrderItem/>
        </Row>
    </div>
  )
}

export default UserAllOrder
