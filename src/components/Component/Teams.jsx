import react,{ useState,useEffect } from 'react'
import axios from "axios";

export function Teams(){

const [team,setTeams]=useState([])
useEffect(()=>{
const options = {
    method: 'GET',
    url: 'https://cricbuzz-cricket.p.rapidapi.com/teams/v1/international',
    headers: {
      'X-RapidAPI-Key': '789a0a5366mshe1c791ef7322453p11eeffjsn5084b89877ea',
      'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    //   console.log(response.data.list);
       let tms=response.data.list.map(()=>{
        
       })
    //   setTeams(response.data.list)
  }).catch(function (error) {
      console.error(error);
  });

},[])

    return (
        <div>
           {team.map((item)=>{
            return(
                
                <div key={item.id}>{item.teamName}</div>
            )
           })

           }
        </div>
    )
}