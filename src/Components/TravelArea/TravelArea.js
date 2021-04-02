import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardImg } from 'reactstrap';
import {Button} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


const TravelArea = (props) => {
  const { title, imgUrl, id } = props.mainTravelPhoto;

  return (
    <Link to={`/book/${id}`}>
  
        <Grid item md={7}  container spacing={2}>
        <Grid  className="image"   >
        <img  style={{width:'300px'}} src={imgUrl} alt="tourPic"/>
        <Button color="Default" style={{fontSize:'20px',overflow:'wrap',color:'white'}}> <CardTitle><strong>{title}</strong></CardTitle></Button>

     
      </Grid>
      </Grid>
    </Link>

  );
};

export default TravelArea;