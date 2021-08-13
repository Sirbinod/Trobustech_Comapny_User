import PropTypes from "prop-types"
import React from "react"
import { Link } from "react-router-dom"
import { Card, CardBody, Col } from "reactstrap"

const CardPricing = props => {
  return (
    <React.Fragment>
      <Col xl="4" md="6">
        <Card className="pricing-box" style={{ padding: "0 1rem" }}>
          <CardBody className="p-4">
            <div className="ms-auto text-center">
              <h4 className="mt-0">{props.pricing.title}</h4>
              <p className="text-muted mb-0">{props.pricing.description}</p>
            </div>

            <div className="pricing-features mt-5 pt-2">
              {props.pricing.features.map((feature, key) => (
                <p key={"_feature_" + key}>
                  <i className={feature.icon + " text-primary me-2"} />{" "}
                  {feature.title}
                </p>
              ))}
            </div>
            <div className="text-center mt-5">
              <h1 className="mb-0">
                <sup>
                  <small>$</small>
                </sup>
                {props.pricing.price}/
                <span className="font-size-16">{props.pricing.duration}</span>
              </h1>
            </div>
            <div className="d-grid mt-5">
              <Link
                to="/form-validation"
                className="btn btn-primary btn-block waves-effect waves-light"
              >
                Choose Plan
              </Link>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

CardPricing.propTypes = {
  pricing: PropTypes.object,
}

export default CardPricing
