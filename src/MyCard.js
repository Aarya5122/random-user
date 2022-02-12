import React from "react";

import { Card, CardBody, CardTitle, CardText } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa"

const MyCard = ({details}) => {

    return(
        <Card>
            <CardBody className="text-center">
                <img height="150" width="150" 
                className="rounded-circle img-thumbnail border-danger"
                src={details.picture?.large}/>
                <CardTitle className="text-primary">
                    <h1>
                        <span>{details.name?.title} </span>
                        <span>{details.name?.first} </span>
                        <span>{details.name?.last}</span>
                    </h1>
                </CardTitle>
                <CardText>
                    <FaEnvelope/>
                    {" "}{details.email}
                    <br/>
                    <FaMapMarkedAlt/>{" "}
                    {details.location?.city}{", "}
                     {details.location?.state}{", "} 
                     {details.location?.country}{" "} 
                     {details.location?.postcode}
                    <br/>
                    <FaPhoneAlt/>
                    {" "}{details.phone}
                </CardText>
            </CardBody>
        </Card>
    );

}

export default MyCard;