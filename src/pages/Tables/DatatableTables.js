import React from "react"
import MetaTags from 'react-meta-tags';
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "./datatables.scss"
import { Link } from "react-router-dom"

const DatatableTables = () => {
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Location",
        field: "location",
        sort: "asc",
        width: 270,
      },
      {
        label: "Candidates",
        field: "candidate",
        sort: "asc",
        width: 200,
      },
      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 100,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 150,
      },
    ],
    rows: [
      {
        name: "React Developer",
        location: "Samakhusi, Kathmandu",
        candidate: "2",
        status: "Open",
        action: <Link to="/ui-alerts">View</Link>,
      },
      {
        name: "Node Developer",
        location: "Samakhusi, Kathmandu",
        candidate: "2",
        status: "Open",
        action: <Link to="/ui-alerts">View</Link>,
      },
      {
        name: "PHP Developer",
        location: "Samakhusi, Kathmandu",
        candidate: "2",
        status: "Open",
        action: <Link to="/ui-alerts">View</Link>,
      },
      {
        name: "Intern",
        location: "Samakhusi, Kathmandu",
        candidate: "2",
        status: "Open",
        action: <Link to="/ui-alerts">View</Link>,
      },
    ],
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>jobs</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs
            maintitle="Jobstrobustech"
            title="Jobs"
            breadcrumbItem="Jobs List"
          />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Jobs</CardTitle>

                  <MDBDataTable responsive bordered data={data} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DatatableTables
