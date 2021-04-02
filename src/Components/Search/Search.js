import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import fakedata from '../../fakeData/hotelDetails'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import SimpleMap from './GoogleMap';


const Search = () => {
  const [rooms, setRooms] = useState([])
  useEffect(() => {
    const room = fakedata.filter(room => room.category === 'room')
    setRooms(room)
  }, [])
  return (
    <Container className="overflow-hidden">
      <Row>
        <Col md={5}>
          {
            rooms.map(roomComponent =>
              <Card>
                <CardImg top width="100%" src={roomComponent.imgUrl} alt="Card image cap" />
                <CardBody>
                  <CardTitle>{roomComponent.title}</CardTitle>
                  <CardSubtitle>${roomComponent.price}/night</CardSubtitle>
                  <CardText>{roomComponent.description}</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            )
          }
        </Col>
        <Col md={7}>
          <SimpleMap />
        </Col>
      </Row>
    </Container>
  );
};

export default Search;