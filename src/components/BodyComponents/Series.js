import axios from "axios";
import React, { useState } from "react";

export function Series() {
    const [mydata, setData] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://cricbuzz-cricket.p.rapidapi.com/series/v1/international',
        headers: {
            'X-RapidAPI-Key': 'c262ace64dmsh279e63bdcb2dd19p1e37acjsn8095b071f5ef',
            // 'X-RapidAPI-Key': 'aeb419b8a7msh1777bfc0866f719p19088ejsndb227c9b9907',
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
        <>
            {
                mydata.map((post,index) => {
                    return (
                        <div key={index}>
                            <h1>Date: {post.date}</h1>
                            <h1>Date: {post.series[0]}</h1>
                            {/* <h2>Series Name: { post.series.map( (el)=>{
                                {el.name}
                            }

                            )}</h2> */}
                        </div>
                    )
                }

                ) 
             } 
        </>

    )
}


