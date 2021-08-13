import React from "react"
import MetaTags from "react-meta-tags"
import {
  Alert,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  UncontrolledAlert,
  Container,
  Button,
} from "reactstrap"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const UiAlert = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Alerts</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs
            maintitle="Veltrix"
            title="UI Elements"
            breadcrumbItem="Alerts"
          />

          <Row>
            <Col lg={4}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Block Buttons</h4>
                  <p className="card-title-desc ">Good for start</p>
                  <h5 className="card-basic-info">10 keywords</h5>
                  <h5 className="card-basic-info">10 keywords</h5>
                  <h4 className="cat-price">$10/month</h4>

                  <div className="button-items">
                    <div className="d-grid">
                      <Link to="form-validation">
                        <Button
                          color="primary"
                          className="btn btn-primary btn-lg w-100 waves-effect waves-light"
                        >
                          Choose Plan
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Block Buttons</h4>
                  <p className="card-title-desc ">Good for start</p>
                  <h5 className="card-basic-info">10 keywords</h5>
                  <h5 className="card-basic-info">10 keywords</h5>
                  <h4 className="cat-price">$10/month</h4>

                  <div className="button-items">
                    <div className="d-grid">
                      <Link to="form-validation">
                        <Button
                          color="primary"
                          className="btn btn-primary btn-lg w-100 waves-effect waves-light"
                        >
                          Choose Plan
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={4}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Block Buttons</h4>
                  <p className="card-title-desc ">Good for start</p>
                  <h5 className="card-basic-info">10 keywords</h5>
                  <h5 className="card-basic-info">10 keywords</h5>
                  <h4 className="cat-price">$10/month</h4>

                  <div className="button-items">
                    <div className="d-grid">
                      <Link to="form-validation">
                        <Button
                          color="primary"
                          className="btn btn-primary btn-lg w-100 waves-effect waves-light"
                        >
                          Choose Plan
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default UiAlert
