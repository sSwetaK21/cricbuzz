// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useState } from 'react';
import axios from "axios";
import './BasicTable.css'




export default function BasicTable() {

  const [mydata, setData] = useState([]);

  const options = {
      method: 'GET',
      url: 'https://cricbuzz-cricket.p.rapidapi.com/series/v1/international',
      headers: {
          // 'X-RapidAPI-Key': 'd0216ea874msh5215c9df7018dc7p12b1bfjsn5b588a368446',
          // 'X-RapidAPI-Key': 'c262ace64dmsh279e63bdcb2dd19p1e37acjsn8095b071f5ef',
          // 'X-RapidAPI-Key': 'aeb419b8a7msh1777bfc0866f719p19088ejsndb227c9b9907',
          'X-RapidAPI-Key': 'ec866219b3msh324accb4fad6377p129cb1jsnef0b933a06bd',
          'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
      }
  };

  axios.request(options).then(function (response) {
      setData(response.data.seriesMapProto)
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Date </TableCell>
            <TableCell align="center">Series Name</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {mydata.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.series[0].name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
