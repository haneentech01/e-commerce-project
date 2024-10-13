import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAllProducts from '../../Components/Admin/AdminAllProducts'
import Pagination from '../../Components/Uitily/Pagination'
import { useDispatch } from 'react-redux'
import useViewProductAdminHook from '../../hook/admin/view-product-admin-hook'

const AdminAddProducts = () => {
  const dispatch = useDispatch();
  const [items, pagination, onPress] = useViewProductAdminHook();

  if (pagination) {
    var pageCount = pagination;
  } else {
    pageCount = 0;
  }

  return (
    <Container>
      <Row>
        <Col xs="3" sm="3" md="2">
          <AdminSideBar/>
        </Col>

        <Col xs="9" sm="9" md="10">
          <AdminAllProducts products={items} />
          {
            pageCount > 1 ? (
              <Pagination pageCount={pageCount} onPress={onPress}/>
            ) : null
          }
        </Col>
      </Row>
    </Container>
  )
}

export default AdminAddProducts
