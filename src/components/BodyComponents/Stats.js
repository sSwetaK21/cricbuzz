import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useState } from 'react'
import axios from 'axios';


function Stats() {

    const [mystats, setMyStats] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/rankings/batsmen',
        params: { formatType: 'test' },
        headers: {
            'X-RapidAPI-Key': 'c262ace64dmsh279e63bdcb2dd19p1e37acjsn8095b071f5ef',
            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        setMyStats(response.data.rank)
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

    return (

        <div className='margin_left'>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Country</TableCell>
            <TableCell align="center">Ratings</TableCell>
            <TableCell align="center">Points</TableCell>

            
          </TableRow>
        </TableHead>
        <TableBody>
        {
                mystats.map((post) => {
                    return (
                        <TableRow>
                            <TableCell>{post.name}</TableCell>
                            <TableCell>{post.country}</TableCell>
                            <TableCell>{post.rating}</TableCell>
                            <TableCell>{post.points}</TableCell>
                        </TableRow>
                    )
                }

                )
            }
        </TableBody>
      </Table>
    </TableContainer>
           

        </div >
    )
}

export default Stats