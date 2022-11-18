import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Matches.css";

// const baseURL = "https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/41881";

export default function Matches() {
  const [loading, setLoading] = useState(false);
  const [Match, setMatch] = useState([]);
  const [TypeBat, setTypeBat] = useState([]);
  const [TypeBall, setTypeBall] = useState([]);


  useEffect(() => {
    setLoading(true);
    
    const options = {
      method: 'GET',
      url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/topstats',
      headers: {
        'X-RapidAPI-Key': '86056af7d2msh89a39d9206b0b0cp15f6d1jsnf613b8123a38',
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      let data = response.data.statsTypesList;
      let typeBatData = response.data.statsTypesList[0].types;
      let typeBallData = response.data.statsTypesList[1].types;

      // let typedataBall

              console.log(data);
              console.log(typeBatData);
              console.log(typeBallData);

                    setMatch([...data, setMatch]);
                    setTypeBat([...typeBatData, setTypeBat])
                    setTypeBall([...typeBallData, setTypeBall])

    }).catch(function (error) {
      console.error(error);
    });
  }, []);
  // console.log(Match);

  return (
    <>
      <div className="wrapper">
        <h1>All Matches</h1>
        {Match.map((item) => {
          return (
            <>
            <h2>{item.category}</h2>
           <ul>
            {TypeBat.map((bat)=>{
              return(
                <>
                <p>{bat.value}</p>
                </>
              )
            })}
           </ul>
            </>
          )
          
        })}
      </div>
    </>
  );
}






