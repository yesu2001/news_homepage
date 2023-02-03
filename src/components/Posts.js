import { Stack } from '@mui/system'
import React from 'react';
import Post from './Post';
import img1 from '../images/image-gaming-growth.jpg';
import img2 from '../images/image-retro-pcs.jpg';
import img3 from '../images/image-top-laptops.jpg';

function Posts() {
  const posts = [
    {
      image: img2,
      id: '01',
      title: 'Riving Retro PCs',
      content: 'What happens when old PCs are given modern upgrades',
    },
    {
      image: img3,
      id: '02',
      title: 'Top 10 Laptops of 2022',
      content: 'Our best pics for various needs and budgets.',
    },
    {
      image: img1,
      id: '03',
      title: 'The growth of Gaming',
      content: 'How the pandemic has sparked fresh opportunities',
    }
  ]

  return (
    <Stack direction="row" spacing={3} sx={{margin:'50px 0'}}>
      {
        posts.map((post,index) => <Post key={index} post={post}/>)
      }
    </Stack>
  )
}

export default Posts