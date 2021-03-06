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
import BasicTables from "pages/Tables/BasicTables"
import EditableTables from "pages/Tables/EditableTables"
import ResponsiveTables from "pages/Tables/ResponsiveTables"

const UiAlert = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Position Pole</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs
            maintitle="Jobstrobustech"
            title="jobs"
            breadcrumbItem="Position/pole"
          />
          <h2 className="developer">MERN Developer</h2>
          <Row>
            <Col lg={2}>
              <Card>
                <CardBody>
                  <div className="onbench">
                    <h2>8</h2>
                    <h5>On Bench</h5>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={2}>
              <Card>
                <CardBody>
                  <div className="applied">
                    <h2>8</h2>
                    <h5>Applied</h5>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={2}>
              <Card>
                <CardBody>
                  <div className="interviewing">
                    <h2>8</h2>
                    <h5>Interviewing</h5>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={2}>
              <Card>
                <CardBody>
                  <div className="madeoffer">
                    <h2>8</h2>
                    <h5>Made Offer</h5>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={2}>
              <Card>
                <CardBody>
                  <div className="rejected">
                    <h2>8</h2>
                    <h5>Rejected</h5>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={2}>
              <Card>
                <CardBody>
                  <div className="hired">
                    <h2>8</h2>
                    <h5>Hired</h5>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <div className="position-table">
            <ResponsiveTables />
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default UiAlert
