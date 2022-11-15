import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './BasicCard.css'

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function BasicCard() {
  const [card, setCard] = useState([])


  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://cricbuzz-cricket.p.rapidapi.com/series/v1/3641',
      headers: {
        // 'X-RapidAPI-Key': 'ed63b97373mshbabac2700b8fac8p1df759jsn02e5b52c05f0',
        'X-RapidAPI-Key': 'c262ace64dmsh279e63bdcb2dd19p1e37acjsn8095b071f5ef',
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
 
      let x = response.data.matchDetails.filter((item) => {
        return item.matchDetailsMap != undefined
      })
      setCard(x)
      console.log(x);
    }).catch(function (error) {
      console.error(error);
    });
  }, [])


  return (
    <div>
      {
        card.map((item) => {
          return (
            <div style={{ 'padding': 20 }}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {item.matchDetailsMap.key}
                  </Typography>

                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item.matchDetailsMap.match[0].matchInfo.seriesName}
                  </Typography>
                  <Typography variant="body2">
                    {item.matchDetailsMap.match[0].matchInfo.matchFormat}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">{item.matchDetailsMap.match[0].matchInfo.status}</Button>
                </CardActions>
              </Card>

            </div>
          )
        })
      }
    </div>

  )


}
