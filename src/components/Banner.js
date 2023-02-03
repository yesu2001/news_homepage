import React from 'react'
import bannerImg from '../images/image-web-3-desktop.jpg';
import styled from '@emotion/styled';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const Box = styled.div(() => ({
  display: 'flex',
}));


const Button = styled.button(() => ({
  background: 'hsl(5, 85%, 63%)',
  color: 'white',
  border: 'none',
  width: 150,
  height: 40,
  borderRadius: 2,
  marginTop: 30,
}))

const SideHeader = styled.div(() => ({
  marginLeft: 40,
  padding: '20px',
  background: 'hsl(240, 100%, 5%)',
  maxWidth: 350,
}))

const Question = styled.div(() => ({
  margin: '20px 0'
}));

const Title = styled.b(() => ({
  color: 'white'
}))

const SmallPara = styled.p(() => ({
  color: 'hsl(233, 8%, 79%)',
  fontSize: 15,
  margin: '10px 0'
}))

function Banner() {
  return (
    <Box>
      <Card sx={{ maxWidth: 800, height: '100%'}}>
        <CardMedia sx={{width: 800, height: 300}} image={bannerImg} title='banner img'/>
        <CardContent sx={{display:'flex', alignItems:'center'}}>
          <Typography gutterBottom variant="h3" component="h3" sx={{fontWeight: '800',maxWidth: 300}}>
          The Bright Future of Web 3.0
          </Typography>
          <div>
            <Typography variant="body2" color="text.secondary" sx={{maxWidth: 600}}>
              We div into the next evolution of the web that claims to put the power of 
              the platforms back into the hands of the people. But is it really       
              fulfilling its promise?
            </Typography>
            <Button size="small">READ MORE</Button>

          </div>
        </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
      </CardActions> */}
      </Card>
      <SideHeader>
        <Typography variant='h4' sx={{padding: '10px 0',color: 'hsl(35, 77%, 62%)', fontWeight: 700}}>NEW</Typography>
        <Question>
          <Title>Hydrogen VS Electric Cars</Title>
          <SmallPara>Will hydrogen-fueled cars ever catch up to EVs?</SmallPara>
        </Question>
        <hr/>
        <Question>
          <Title>The Downsides of AI Artistry</Title>
          <SmallPara>What are the possible adverse effects of on-demand AI image generation?</SmallPara>
        </Question>
        <hr/>
        <Question>
          <Title>Is VC Funding Drying Up</Title>
          <SmallPara>Private funding by VC firms is down 50% YOY. We taje a look at what that means.</SmallPara>
        </Question>
      </SideHeader>
    </Box>
  )
}

export default Banner