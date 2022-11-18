import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


export default function News() {
  const [loading, setLoading] = useState(false);
  const [News, setNews] = useState([]);
  

  useEffect(() => {
    setLoading(true);
    const url = "https://raw.githubusercontent.com/sadhna2507/Cricket-API/master/NewsHeadline.json"
    axios
    .get(url)
    .then((response) => {
        let result = response.data;
        setNews(result);
        console.log(result)
    })

    .catch(function (error) {
              console.error(error);
          });

    // const options = {
    //     method: 'GET',
    //     url: 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/index',
    //     headers: {
    //       'X-RapidAPI-Key': '86056af7d2msh89a39d9206b0b0cp15f6d1jsnf613b8123a38',
    //       'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    //     }
    //   };
      
    //   axios.request(options).then(function (response) {
    //     //   console.log(response.data);
    //       let data = response.data.storyList.filter((item) =>{
    //         return item.story != undefined
    //       })
    //     //   console.log(data);
    //       setNews([...data, setNews]);
    //   }).catch(function (error) {
    //       console.error(error);
    //   });
   
  }, []);
//   console.log(News)

  return (
    <>
      <div className="wrapper">
        <h1>Headlines</h1>
        {News.map((item) => {
         return(
            <div>
                <h2>{item.headline}</h2>
                <p>{item.intro}</p>
            </div>
         )
          
        })}
      </div>
    </>
  );
}


