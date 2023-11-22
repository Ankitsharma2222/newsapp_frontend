
import React from 'react'
import { Card, CardContent, CardMedia, Typography, Grid, Avatar } from '@mui/material';
import { useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

function Fullview() {
    const newsid=useParams().id
    const [FullNews,setFullNews]=useState([])
    useEffect(()=>{
            fetch(`http://localhost:5000/news/${newsid}`,{
                method:"get",
            }).then(res=>res.json())
            .then(result=>{           
                console.log(result)
                setFullNews(result)        
            })



    },[])    
  return (
        <Card sx={{ maxWidth: 600 }}>
            {/* <CardMedia component="img" height="300"  alt="howw" /> */}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {/* {title} */}
                cnsjcbsjbj
                </Typography>
                <Typography variant="body2" color="text.secondary">
                jcdhuc ndbcjscbsjcbshcbshjjhvs jschjsvcs vvchvchs
                </Typography>
                <Grid container alignItems="center" spacing={1} mt={2}>
                <Grid item>
                    <Avatar alt="bbc" src={FullNews.image_link} />
                </Grid>
                <Grid item>
                    <Typography variant="body2"> bbjdfh bfhjb </Typography>
                </Grid>
                </Grid>
            </CardContent>
        </Card>
  );
};


export default Fullview;