import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function Post({post}) {
  return (
    <Card sx={{ display: 'flex',width:500}}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 150 }}
        image={post.image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='div' variant='h4' sx={{color: 'hsl(233, 8%, 79%)',fontWeight: 700}}>{post.id}</Typography>
          <Typography component="div" variant="h6" sx={{fontWeight: 600}}>
            {post.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="span" >
            {post.content}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}

export default Post