import React from "react";
import { useState, useEffect, useContext } from "react";
import ABC from "../../UserContext";
import axios from "axios";
import "./NewsDetail.css";

export default function NewsDeatail() {
  const [Detail, setDetail] = useState([]);
  const { Id } = useContext(ABC);
  console.log(Id);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://cricbuzz-cricket.p.rapidapi.com/news/v1/detail/${Id}`,
      headers: {
        "X-RapidAPI-Key": "637fa518e2msha940fdab3bf1190p1adfb3jsn1678070b768f",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        let detailednews = response.data.content.filter((item) => {
          return item.content != undefined;
        });
        console.log(detailednews);
        setDetail(detailednews);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log("Detail", Detail);
  return (
    <div className="detailContainer">
      <h1 className="detailheader">Detailed News</h1>

      {Detail.map((item, index) => {
        return (
          <div className="contentWrapper" key={index}>
            <p >{item.content.contentValue}</p>
          </div>
        );
      })}
    </div>
  );
}
