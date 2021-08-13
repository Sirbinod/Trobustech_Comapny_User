import React, { useState } from "react"
import MetaTags from "react-meta-tags"
import { Link } from "react-router-dom"

import { Col, Row, Card, CardBody, CardTitle, Container } from "reactstrap"
import {
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const UiButtons = () => {
  const [radio1, setradio1] = useState(true)
  const [radio2, setradio2] = useState(false)
  const [radio3, setradio3] = useState(false)
  const [drp_link, setdrp_link] = useState(false)

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Buttons</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs
            maintitle="Veltrix"
            title="UI Elements"
            breadcrumbItem="Buttons"
          />

          <Row className="mx-5">
            <Col>
              <Card className="subscription">
                <CardBody>
                  <h4 className="card-title">Subscription Plan</h4>
                  <Card className="subscription-card">
                    <CardBody>
                      <div className="subscription-card-head">
                        <h4>Advance plan</h4>
                        <h4>
                          <span className="price">$80.00 </span>
                          <span className="months">/months</span>
                        </h4>
                      </div>
                      <span>100 keywords, 9 superkey</span>
                      <div className="subscription-card-active">
                        <span>Active keywords: 99</span>
                      </div>
                      <div className="subscription-card-footer">
                        <Link to="/pages-pricing">
                          <Button color="primary" className="btn btn-primary">
                            Change Plan
                          </Button>
                        </Link>
                        <h5>
                          Expired Date:<span className="data"> 09-10-2021</span>
                        </h5>
                      </div>
                    </CardBody>
                  </Card>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default UiButtons
