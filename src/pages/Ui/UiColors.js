import React from "react"
import MetaTags from "react-meta-tags"

import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardText,
  CardHeader,
  CardImgOverlay,
  CardFooter,
  CardDeck,
  CardColumns,
  Container,
} from "reactstrap"

// import images
import img1 from "../../assets/images/small/img-1.jpg"
import img2 from "../../assets/images/small/img-2.jpg"
import img3 from "../../assets/images/small/img-3.jpg"
import img4 from "../../assets/images/small/img-4.jpg"
import img5 from "../../assets/images/small/img-5.jpg"
import img6 from "../../assets/images/small/img-6.jpg"
import img7 from "../../assets/images/small/img-7.jpg"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const UiColors = props => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Candidate Profile</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs
            maintitle="Jobstrobustech"
            title="Candidate"
            breadcrumbItem="Candidate Profile"
          />

          <Row>
            <Col>
              <Card body className="candidate-profile-card">
                <Row>
                  <Col md={3}>
                    <div className="candidate-profile">
                      <img
                        src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                        alt="Candidate profile"
                      />
                    </div>
                  </Col>
                  <Col md={5}>
                    <div className="h3 mt-0">
                      LightWeb Group
                      <Link
                        to="/fomr-company"
                        className="btn btn-primary waves-effect waves-light mx-2"
                      >
                        CV
                      </Link>
                      <p className="sub-title">Samakhusi, Kathmandu, Nepal</p>
                    </div>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris blandit nisl ullamcorper, rutrum metus in, congue
                      lectus. In hac habitasse platea dictumst. Cras urna quam,
                      malesuada vitae risus at, pretium blandit sapien.Lorem
                      ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                      blandit nisl ullamcorper, rutrum metus.
                    </p>
                  </Col>
                  <Col md={4}>
                    <Row className="mb-4">
                      <Col>
                        <h5>Expired Date</h5>
                        <h5>09/20/2021</h5>
                      </Col>
                      <Col>
                        <h5>Status</h5>
                        <h5>Active</h5>
                      </Col>
                    </Row>
                    <div className="">
                      <i className="ti-email me-2"></i>
                      <span>sumanchhettri10@gmail.com</span>
                    </div>
                    <div>
                      <i className="ti-headphone-alt me-2"></i>
                      <span>987654321</span>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}
export default UiColors
