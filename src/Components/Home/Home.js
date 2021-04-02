import React from 'react';

import './Home.css'
import fakedata from '../../fakeData/hotelDetails'

import { Container, Row } from 'reactstrap';
import TravelArea from '../TravelArea/TravelArea';

const Home = () => {
  const placeCard = fakedata.slice(0, 3)

  return (


    <Container>
      <Row>
        {
          placeCard && placeCard.map((mainPagePhoto, i) =>
            <div key={i} className="col-md-4">
              <TravelArea key={i} mainTravelPhoto={mainPagePhoto}></TravelArea>
            </div>
          )
        }
      </Row>
    </Container>


  );
};

export default Home;