import React, { useState } from "react"
import MetaTags from "react-meta-tags"

import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  FormGroup,
  Label,
} from "reactstrap"
import Select from "react-select"

import classnames from "classnames"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const CandidateCreate = () => {
  const [activeTab, setactiveTab] = useState(1)
  const [activeTabProgress, setactiveTabProgress] = useState(1)
  const [progressValue, setprogressValue] = useState(25)
  const [activeTabVartical, setoggleTabVertical] = useState(1)

  function toggleTab(tab) {
    if (activeTab !== tab) {
      if (tab >= 1 && tab <= 4) {
        setactiveTab(tab)
      }
    }
  }

  function toggleTabVertical(tab) {
    if (activeTabVartical !== tab) {
      if (tab >= 1 && tab <= 4) {
        setoggleTabVertical(tab)
      }
    }
  }

  function toggleTabProgress(tab) {
    if (activeTabProgress !== tab) {
      if (tab >= 1 && tab <= 4) {
        setactiveTabProgress(tab)

        if (tab === 1) {
          setprogressValue(25)
        }
        if (tab === 2) {
          setprogressValue(50)
        }
        if (tab === 3) {
          setprogressValue(75)
        }
        if (tab === 4) {
          setprogressValue(100)
        }
      }
    }
  }

  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti)
  }
  const [selectedMulti, setselectedMulti] = useState(null)

  const optionGroup = [
    {
      options: [
        { label: "Mustard", value: "Mustard" },
        { label: "Ketchup", value: "Ketchup" },
        { label: "Relish", value: "Relish" },
      ],
    },
  ]
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Job Post</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs
            maintitle="JobsTrobustech"
            title="Job"
            breadcrumbItem="Job Post"
          />

          <Row>
            <Col sm="12">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Job Post</h4>
                  <div className="form-horizontal form-wizard-wrapper wizard clearfix">
                    <div className="steps clearfix">
                      <ul>
                        <NavItem
                          className={classnames({ current: activeTab === 1 })}
                        >
                          <NavLink
                            className={classnames({ current: activeTab === 1 })}
                            onClick={() => {
                              setactiveTab(1)
                            }}
                          >
                            <span className="number">1.</span> CANDIDATE PROFILE
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({ current: activeTab === 2 })}
                        >
                          <NavLink
                            className={classnames({ active: activeTab === 2 })}
                            onClick={() => {
                              setactiveTab(2)
                            }}
                          >
                            <span className="number">2.</span>PAYMENT DETAILS
                          </NavLink>
                        </NavItem>
                      </ul>
                    </div>
                    <div className="content clearfix">
                      <TabContent activeTab={activeTab} className="body">
                        <TabPane tabId={1}>
                          <Form>
                            <Row className="mb-3">
                              <Col lg="6">
                                <FormGroup>
                                  <Label for="exampleSelect">
                                    Candidate Phase
                                  </Label>
                                  <Input
                                    type="select"
                                    name="select"
                                    id="exampleSelect"
                                  >
                                    <option>New</option>
                                    <option>Follow Up</option>
                                    <option>Quelified</option>
                                    <option>Hire</option>
                                    {/* <option>5</option> */}
                                  </Input>
                                </FormGroup>
                              </Col>
                              <Col lg="6">
                                <FormGroup>
                                  <Label for="exampleSelect">Active</Label>
                                  <Input
                                    type="select"
                                    name="select"
                                    id="exampleSelect"
                                  >
                                    <option>Yes</option>
                                    <option>No</option>
                                  </Input>
                                </FormGroup>
                              </Col>
                            </Row>

                            <Row>
                              <Col md={6}>
                                <div className="mb-3">
                                  <label className="control-label">Name</label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    defaultValue=""
                                  />
                                </div>
                              </Col>
                              <Col md={6}>
                                <div className="mb-3">
                                  <label className="control-label">Title</label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    defaultValue=""
                                  />
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <div className="mb-3">
                                  <label className="control-label">Email</label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    defaultValue=""
                                  />
                                </div>
                              </Col>
                              <Col md={6}>
                                <div className="mb-3">
                                  <label className="control-label">Phone</label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    defaultValue=""
                                  />
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <div className="mb-3">
                                  <label className="control-label">
                                    Address
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    defaultValue=""
                                  />
                                </div>
                              </Col>
                              <Col md={6}>
                                <div className="mb-3">
                                  <label className="control-label">City</label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    defaultValue=""
                                  />
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <div className="mb-3">
                                  <label className="control-label">State</label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    defaultValue=""
                                  />
                                </div>
                              </Col>
                              <Col md={6}>
                                <div className="mb-3">
                                  <label className="control-label">Zip</label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    defaultValue=""
                                  />
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <div className="mb-3">
                                  <label className="control-label">
                                    No. of Exp
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    defaultValue=""
                                  />
                                </div>
                              </Col>
                              <Col md={6}>
                                <div className="mb-3">
                                  <label className="control-label">
                                    Source URL
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    defaultValue=""
                                  />
                                </div>
                              </Col>
                            </Row>
                          </Form>
                        </TabPane>
                        <TabPane tabId={2}>
                          <Form>
                            <Row className="mb-3">
                              <Col lg="6">
                                <FormGroup>
                                  <Label for="exampleSelect">Visa Type</Label>
                                  <Input
                                    type="select"
                                    name="select"
                                    id="exampleSelect"
                                  >
                                    <option>Citizen</option>
                                    <option>Green Card</option>
                                    <option>H1B</option>
                                  </Input>
                                </FormGroup>
                              </Col>
                              <Col lg="6">
                                <FormGroup>
                                  <Label for="exampleSelect">
                                    Employment Type
                                  </Label>
                                  <Input
                                    type="select"
                                    name="select"
                                    id="exampleSelect"
                                  >
                                    <option>Salary</option>
                                    <option>Hourly</option>
                                  </Input>
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row className="mb-3">
                              <Col lg="6">
                                <FormGroup>
                                  <Label for="exampleSelect">Rate Type</Label>
                                  <Input
                                    type="select"
                                    name="select"
                                    id="exampleSelect"
                                  >
                                    <option>C2C</option>
                                    <option>W2</option>
                                  </Input>
                                </FormGroup>
                              </Col>
                              <Col md={6}>
                                <div className="mb-3">
                                  <label className="control-label">
                                    W2 Rate Range
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    defaultValue=""
                                  />
                                </div>
                              </Col>
                            </Row>

                            <Row>
                              <Col md={6}>
                                <div className="mb-3">
                                  <label className="control-label">
                                    Date Created
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    defaultValue=""
                                  />
                                </div>
                              </Col>
                              <Col md={6}>
                                <div className="mb-3">
                                  <label className="control-label">
                                    Data Modified
                                  </label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    defaultValue=""
                                  />
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <div className="mb-3">
                                <label className="control-label">
                                  Date Created
                                </label>
                                <input
                                  className="form-control py-5"
                                  type="text"
                                  defaultValue=""
                                />
                              </div>
                            </Row>
                          </Form>
                        </TabPane>
                      </TabContent>
                    </div>
                    <div className="actions clearfix">
                      <ul>
                        <li
                          className={
                            activeTab === 1 ? "previous disabled" : "previous"
                          }
                        >
                          <Link
                            to="#"
                            className="btn btn-primary"
                            onClick={() => {
                              toggleTab(activeTab - 1)
                            }}
                          >
                            Previous
                          </Link>
                        </li>
                        <li
                          className={activeTab === 4 ? "next disabled" : "next"}
                        >
                          <Link
                            to="#"
                            className="btn btn-primary"
                            onClick={() => {
                              toggleTab(activeTab + 1)
                            }}
                          >
                            Next
                          </Link>
                        </li>
                      </ul>
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

export default CandidateCreate
