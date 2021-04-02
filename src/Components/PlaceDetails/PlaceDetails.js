import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';
import fakeData from '../../fakeData/hotelDetails'
import { FormGroup, Label, Input } from 'reactstrap';
import { Card, Form } from 'react-bootstrap';
import './PlaceDetails.css';
import TextField from '@material-ui/core/TextField';

const PlaceDetails = () => {
  const { placeId } = useParams()
  const matchingCardDetails = fakeData.find(item => item.id === parseInt(placeId))
  const { title, description } = matchingCardDetails



  const submitForm = (e) => {
    e.preventDefault()
  }

  return (

    <Container style={{ color: "white" }}>
      <Row>
        <Col md={8}>
          <h1 style={{color:'#FF0063'}}>{title}</h1>
          <p >{description}</p>
        </Col>

        <Col md={4} style={{border: "2px solid gray", boxShadow: "5px 5px 10px black" ,backgroundColor:'white'}}>
          <Form onSubmit={submitForm}>

            <FormGroup>
              <Label className='travel-info' for="location">Origin</Label>
              <Input
                type="location"
                name="location"
                placeholder="From Where to go"
              />
            </FormGroup>
            <FormGroup>
            
              <Label className='travel-info' for="location">Destination</Label>
              <Input
                type="location"
                name="location"
                placeholder="From where to go"
              />
                   
            </FormGroup>
            <FormGroup>

            <div className="col-md-6">
              <Label className='travel-info' for="exampleDatetime">From </Label>
              <TextField
                      id="Startdate"
                      type="date"
                      defaultValue="2017-05-24"
                      
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
              </div>
            </FormGroup>
            <FormGroup>
            <div className="col-md-6">
              <Label className='travel-info' for="exampleDate">To </Label>
              <TextField
                      id="Enddate"
                      type="date"
                      defaultValue="2017-05-24"
                      
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
              </div>
            </FormGroup>

            <Link to='/search'><Button size='lg' style={{backgroundColor:'#F9A51A',color:'black'}}>Start Booking</Button></Link>
          </Form>
        </Col>


      </Row>

    </Container >
  );
};

export default PlaceDetails;