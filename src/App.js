import React,{ useState,useEffect } from "react"

import{ Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"

import './App.css';

import Axios from "axios";

import MyCard from "./MyCard";

const App = () => {

  const [ details, setDetails ] = useState({});

  const fetchDetails = async () => {
    //{data} --> response.data  --> response is an object
    const {data} = await Axios.get("https://randomuser.me/api");
    const details = data.results[0]
    setDetails(details);
  }

  useEffect(()=>{fetchDetails()}, [])
  
  return (
    <Container fluid>
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <MyCard details={details}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
