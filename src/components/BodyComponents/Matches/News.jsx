import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./News.css" 
import ABC from "../../UserContext";
import { Link } from "react-router-dom";


export default function News() {
  const [loading, setLoading] = useState(false);
  const [News, setNews] = useState([]);
  const{Id, setId} = useContext(ABC);

  useEffect(() => {
    setLoading(true);
    const options = {
        method: 'GET',
        url: 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/index',
        headers: {
          'X-RapidAPI-Key': '86056af7d2msh89a39d9206b0b0cp15f6d1jsnf613b8123a38',
          'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        //   console.log(response.data);
          let data = response.data.storyList.filter((item) =>{
            return item.story != undefined
          })
          console.log(data);
          
          setNews(data);
      }).catch(function (error) {
          console.error(error);
      });
   
  }, []);

  
    const clickId = (e) =>{
      let newsId = e.target.id
      // console.log(newsId);
      setId(newsId);
    }




  return (
    <>
      <div className="container">
        <h1 className="Head">Headlines</h1>
        {News.map((item) => {
         return(
      <ABC.Provider value={{ Id, setId }}>

            <div className="Wrapper">
                <h2 className="Headline">{item.story.hline}</h2>
                <p className="Intro">Introduction : {item.story.intro}</p>
                <Link to= "/NewsDetail">
                <button onClick={(e)=>clickId(e)} id={item.story.id} >Read More</button>
                </Link>

                
            </div>
            </ABC.Provider>
         )
          
        })}
      </div>
    </>
  );
}




