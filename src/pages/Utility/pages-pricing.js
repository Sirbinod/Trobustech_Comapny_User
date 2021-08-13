import React from "react"
import { Container, Row } from "reactstrap"
import MetaTags from "react-meta-tags"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Pricing Cards
import CardPricing from "./card-pricing"

const PagesPricing = () => {
  const pricings = [
    {
      id: 1,
      title: "Basic",
      description: "Good for starter",
      icon: "ion ion-ios-airplane",
      price: "19",
      duration: "Per month",
      link: "",
      features: [
        { icon: "mdi mdi-check", title: "Free Live Support" },
        { icon: "mdi mdi-check", title: "Unlimited User" },
        { icon: "mdi mdi-check", title: "No Time Tracking" },
        { icon: "mdi mdi-close", title: "Free Setup" },
      ],
    },
    {
      id: 2,
      title: "Standard",
      description: "Standard Level",
      icon: "ion ion-ios-trophy",
      price: "29",
      duration: "Per month",
      link: "",
      features: [
        { icon: "mdi mdi-check", title: "Free Live Support" },
        { icon: "mdi mdi-check", title: "Unlimited User" },
        { icon: "mdi mdi-check", title: "No Time Tracking" },
        { icon: "mdi mdi-close", title: "Free Setup" },
      ],
    },
    {
      id: 3,
      title: "Premium",
      description: "Sound like awesome",
      icon: "ion ion-ios-umbrella",
      price: "39",
      duration: "Per month",
      link: "",
      features: [
        { icon: "mdi mdi-check", title: "Free Live Support" },
        { icon: "mdi mdi-check", title: "Unlimited User" },
        { icon: "mdi mdi-check", title: "No Time Tracking" },
        { icon: "mdi mdi-close", title: "Free Setup" },
      ],
    },
  ]
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Subscription</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs
            maintitle="Veltrix"
            title="Extra Pages"
            breadcrumbItem="Subscription"
          />

          <Row style={{ margin: "0 3rem" }}>
            {pricings.map((pricing, key) => (
              <CardPricing pricing={pricing} key={"_pricing_" + key} />
            ))}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}
export default PagesPricing
