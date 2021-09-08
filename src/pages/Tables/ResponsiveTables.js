import React from "react"
import MetaTags from "react-meta-tags"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "./datatables.scss"
import { Link } from "react-router-dom"

const ResponsiveTables = () => {
  const data = {
    columns: [
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 150,
      },
      {
        label: "Profile",
        field: "profile",
        sort: "asc",
        width: 150,
      },
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Candidate Phase",
        field: "candidatephase",
        sort: "asc",
        width: 300,
      },
      {
        label: "Title",
        field: "title",
        sort: "asc",
        width: 300,
      },
      {
        label: "Active",
        field: "active",
        sort: "asc",
        width: 100,
      },
      {
        label: "Phone",
        field: "phone",
        sort: "asc",
        width: 180,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 150,
      },
      {
        label: "City",
        field: "city",
        sort: "asc",
        width: 150,
      },
      {
        label: "State",
        field: "state",
        sort: "asc",
        width: 150,
      },
      {
        label: "Visa Type",
        field: "visatype",
        sort: "asc",
        width: 200,
      },
      {
        label: "Rate Type",
        field: "ratetype",
        sort: "asc",
        width: 150,
      },
      {
        label: "Rate Range",
        field: "raterange",
        sort: "asc",
        width: 150,
      },
      {
        label: "Source  ",
        field: "source",
        // sort: "asc",
        width: 150,
      },
    ],
    rows: [
      {
        name: "Tiger Nixon",
        email: "00np10@gmail.com",
        phone: "09123456",
        candidatephase: "Yes",
        title: "Js Developerhjdsbfkjhsbhdkjhn",
        Active: "Yes",
        city: "Kathmandu",
        state: "Bagmati",
        visatype: "Ciyizen",
        ratetype: "W2",
        raterange: "45",
        source: "linkedin skjdfnkjslndfkjnskj",
        action: <Link>Submit Vendor</Link>,
        profile: <Link to="/candidate-position-pole">View</Link>,
      },
      {
        name: "Garrett Winters",

        email: "00np10@gmail.com",
        phone: "09123456",
        candidatephase: "Yes",
        title: "Js Developer",
        Active: "Yes",
        city: "Kathmandu",
        state: "Bagmati",
        visatype: "Ciyizen",
        ratetype: "W2",
        raterange: "45",
        source: "linkedin",

        action: <Link>Submit Vendor</Link>,
        profile: <Link to="/candidate-position-pole">View</Link>,
      },
      {
        name: "Ashton Cox",

        email: "00np10@gmail.com",
        phone: "09123456",
        candidatephase: "No",
        title: "Js Developer",
        Active: "Yes",
        city: "Kathmandu",
        state: "Bagmati",
        visatype: "Ciyizen",
        ratetype: "W2",
        raterange: "45",
        source: "linkedin",

        action: <Link>Submit Vendor</Link>,
        profile: <Link to="/candidate-position-pole">View</Link>,
      },
      {
        name: "Cedric Kelly",

        email: "00np10@gmail.com",
        phone: "09123456",
        candidatephase: "No",
        title: "Js Developer",
        Active: "Yes",
        city: "Kathmandu",
        state: "Bagmati",
        visatype: "Ciyizen",
        ratetype: "W2",
        raterange: "45",
        source: "linkedin",

        action: <Link>Submit Vendor</Link>,
        profile: <Link to="/candidate-position-pole">View</Link>,
      },
    ],
  }

  return (
    <React.Fragment>
      <Row>
        <Col className="col-12">
          <Card>
            <CardBody>
              <CardTitle className="h4">Candidate</CardTitle>

              <MDBDataTable responsive bordered data={data} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default ResponsiveTables
