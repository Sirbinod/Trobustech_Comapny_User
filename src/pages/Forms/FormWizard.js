import React, { useState } from "react"
import MetaTags from 'react-meta-tags';

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
  TabPane
} from "reactstrap"

import classnames from "classnames"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const FormWizard = () => {
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
                            <span className="number">1.</span> Let's get started
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
                            <span className="number">2.</span>Job Details
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({ current: activeTab === 3 })}
                        >
                          <NavLink
                            className={classnames({ active: activeTab === 3 })}
                            onClick={() => {
                              setactiveTab(3)
                            }}
                          >
                            <span className="number">3.</span>
                            Additional
                          </NavLink>
                        </NavItem>
                      </ul>
                    </div>
                    <div className="content clearfix">
                      <TabContent activeTab={activeTab} className="body">
                        <TabPane tabId={1}>
                          <Form>
                            <Row>
                              <div className="mb-3">
                                <label className="control-label">
                                  Company Name
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  defaultValue=""
                                />
                              </div>
                            </Row>
                            <Row>
                              <div className="mb-3">
                                <label className="control-label">
                                  Job Title
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  defaultValue=""
                                />
                              </div>{" "}
                            </Row>
                            <Row>
                              <div className="mb-3">
                                <label className="control-label">
                                  Location
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  defaultValue=""
                                />
                              </div>
                            </Row>
                            <Row>
                              <div className="mb-3">
                                <label className="control-label">
                                  How many hires?
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  defaultValue=""
                                />
                              </div>
                            </Row>
                          </Form>
                        </TabPane>
                        <TabPane tabId={2}>
                          <Form>
                            <Row>
                              <div className="mb-3">
                                <label className="control-label">
                                  What type of employment is it?
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  defaultValue=""
                                />
                              </div>
                            </Row>
                            <Row>
                              <div className="mb-3">
                                <label className="control-label">
                                  What type of Job is it?
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  defaultValue=""
                                />
                              </div>{" "}
                            </Row>
                            <Row>
                              <div className="mb-3">
                                <label className="control-label">
                                  Job Level
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  defaultValue=""
                                />
                              </div>
                            </Row>
                            <Row>
                              <div className="mb-3">
                                <label className="control-label">
                                  Job Description
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  defaultValue=""
                                />
                              </div>
                            </Row>
                            <Row>
                              <div className="mb-3">
                                <label className="control-label">
                                  Required Experience
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  defaultValue=""
                                />
                              </div>
                            </Row>
                          </Form>
                        </TabPane>
                        <TabPane tabId={3}>
                          <Form>
                            <Row>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label
                                    htmlFor="txtNameCard"
                                    className="col-lg-3 col-form-label"
                                  >
                                    Name on Card
                                  </label>
                                  <div className="col-lg-9">
                                    <Input
                                      id="txtNameCard"
                                      name="txtNameCard"
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Row>
                              </Col>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label
                                    htmlFor="ddlCreditCardType"
                                    className="col-lg-3 col-form-label"
                                  >
                                    Credit Card Type
                                  </label>
                                  <div className="col-lg-9">
                                    <Input
                                      type="select"
                                      id="ddlCreditCardType"
                                      name="ddlCreditCardType"
                                      className="form-select"
                                    >
                                      <option value="">
                                        --Please Select--
                                      </option>
                                      <option value="AE">
                                        American Express
                                      </option>
                                      <option value="VI">Visa</option>
                                      <option value="MC">MasterCard</option>
                                      <option value="DI">Discover</option>
                                    </Input>
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label
                                    htmlFor="txtCreditCardNumber"
                                    className="col-lg-3 col-form-label"
                                  >
                                    Credit Card Number
                                  </label>
                                  <div className="col-lg-9">
                                    <Input
                                      id="txtCreditCardNumber"
                                      name="txtCreditCardNumber"
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Row>
                              </Col>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label
                                    htmlFor="txtCardVerificationNumber"
                                    className="col-lg-3 col-form-label"
                                  >
                                    Card Verification Number
                                  </label>
                                  <div className="col-lg-9">
                                    <Input
                                      id="txtCardVerificationNumber"
                                      name="txtCardVerificationNumber"
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <Row className="mb-3">
                                  <label
                                    htmlFor="txtExpirationDate"
                                    className="col-lg-3 col-form-label"
                                  >
                                    Expiration Date
                                  </label>
                                  <div className="col-lg-9">
                                    <Input
                                      id="txtExpirationDate"
                                      name="txtExpirationDate"
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Row>
                              </Col>
                            </Row>
                          </Form>
                        </TabPane>
                        <TabPane tabId={4}>
                          <div className="row justify-content-center">
                            <Col lg="6">
                              <div className="text-center">
                                <div className="mb-4">
                                  <i className="mdi mdi-check-circle-outline text-success display-4" />
                                </div>
                                <div>
                                  <h5>Confirm Detail</h5>
                                  <p className="text-muted">
                                    If several languages coalesce, the grammar
                                    of the resulting
                                  </p>
                                </div>
                              </div>
                            </Col>
                          </div>
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

export default FormWizard