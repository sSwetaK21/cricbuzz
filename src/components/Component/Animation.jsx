import "./Anni.css";
import React, { useState } from "react";
import axios from "axios";
import { BarCharts } from "./BarCharts";
import { LineCharts } from "./LineCharts";
import { PieCharts } from "./PieCharts";
import { AreaCharts } from "./AreaCharts";
import { SingalBar } from "./SingalBar";

export function Animation() {
  const [intvalue, setIntValue] = useState(""); // Store Search Value
  const [plyers, setPlyers] = useState([]); // Store Search Players

  const [plyerbat, setPlyerBat] = useState([]); // Players Battinging Stats
  const [plyerball, setPlyerBall] = useState([]); // Players Bowling Stats
  const [plyerInfo, setPlyerInfo] = useState({}); // Player Info
  const [plyerCareer, setPlyerCareer] = useState([]); // Player Career
  const [image, setImage] = useState(); // Player Image

  const [battingRank, setbattingRank] = useState({}); // Batting Rank
  const [bowlingRank, setbowlingRank] = useState({}); // bowling Rank
  const [height, setHeight] = useState([]); // Batting Best
  const [best, setBest] = useState([]); // bowling Best
  // ===========================================================
  const [matchInnings, setmatchInnings] = useState([]); // Match Innings
  const [avgSr, setavgSr] = useState([]); // Avg Sr
  const [fiftyHundred, setfiftyHundred] = useState([]); // Fifty Hundred
  const [runs, setRuns] = useState([]); // Runs

  // ==========================================================================
  const [ecoavg, setEcoAvg] = useState([]); // Eco Avg
  const [wicket, setWicket] = useState([]); // Wicket
  const [fiveTen, setfiveTen] = useState([]); // Five Ten
  const [ballsRuns, setballsRuns] = useState([]); // Balls Runs

  const handelSearch = () => {
    const options = {
      method: "GET",
      url: "https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/search",
      params: { plrN: `${intvalue}` },
      headers: {
        "X-RapidAPI-Key": "789a0a5366mshe1c791ef7322453p11eeffjsn5084b89877ea", //96
        // "X-RapidAPI-Key": "05a62a30a9msh724ae88f7cb0ec5p10f4dajsnd998a8323ec6", //25408
        // "X-RapidAPI-Key": "c5935708d6mshe183f0294da3364p14325bjsn1fbf8d9d68dc",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setPlyers(response.data.player);
      })
      .catch(function (error) {
        console.error(error);
      });
    setIntValue("");
  };

  const handalData = (id, imgId) => {
    const batting = {
      method: "GET",
      url: `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${id}/batting`,
      headers: {
        "X-RapidAPI-Key": "789a0a5366mshe1c791ef7322453p11eeffjsn5084b89877ea", //96
        // "X-RapidAPI-Key": "05a62a30a9msh724ae88f7cb0ec5p10f4dajsnd998a8323ec6", //25408
        // "X-RapidAPI-Key": "c5935708d6mshe183f0294da3364p14325bjsn1fbf8d9d68dc",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    axios
      .request(batting)
      .then(function (response) {
        // console.log(response.data.values);
        setPlyerBat(response.data.values);

        let Matches = response.data.values[0].values;
        let Innings = response.data.values[1].values;
        setmatchInnings([
          [JSON.parse(Matches[1]), JSON.parse(Innings[1]), "Test"],
          [JSON.parse(Matches[2]), JSON.parse(Innings[2]), "ODI"],
          [JSON.parse(Matches[3]), JSON.parse(Innings[3]), "T20"],
          [JSON.parse(Matches[4]), JSON.parse(Innings[4]), "IPL"],
        ]);
        let Avg = response.data.values[5].values;
        let Sr = response.data.values[6].values;
        setavgSr([
          [JSON.parse(Avg[1]), JSON.parse(Sr[1]), "Test"],
          [JSON.parse(Avg[2]), JSON.parse(Sr[2]), "ODI"],
          [JSON.parse(Avg[3]), JSON.parse(Sr[3]), "T20"],
          [JSON.parse(Avg[4]), JSON.parse(Sr[4]), "IPL"],
        ]);
        let fifty = response.data.values[11].values;
        let hundred = response.data.values[12].values;
        setfiftyHundred([
          [JSON.parse(fifty[1]), JSON.parse(hundred[1]), "Test"],
          [JSON.parse(fifty[2]), JSON.parse(hundred[2]), "ODI"],
          [JSON.parse(fifty[3]), JSON.parse(hundred[3]), "T20"],
          [JSON.parse(fifty[4]), JSON.parse(hundred[4]), "IPL"],
        ]);
        let run = response.data.values[2].values;
        setRuns([
          [JSON.parse(run[1]), "Test"],
          [JSON.parse(run[2]), "ODI"],
          [JSON.parse(run[3]), "T20"],
          [JSON.parse(run[4]), "IPL"],
        ]);
        setHeight(response.data.values[4]);
        setPlyers([]);
      })
      .catch(function (error) {
        console.error(error);
      });

    const bowling = {
      method: "GET",
      url: `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${id}/bowling`,
      headers: {
        "X-RapidAPI-Key": "789a0a5366mshe1c791ef7322453p11eeffjsn5084b89877ea", //96
        // "X-RapidAPI-Key": "05a62a30a9msh724ae88f7cb0ec5p10f4dajsnd998a8323ec6", //25408
        // "X-RapidAPI-Key": "c5935708d6mshe183f0294da3364p14325bjsn1fbf8d9d68dc",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    axios
      .request(bowling)
      .then(function (response) {
        // console.log(response.data.values);
        setPlyerBall(response.data.values);
        setBest(response.data.values[9]);
        setWicket(response.data.values[5]);
        let avg = response.data.values[6].values;
        let eco = response.data.values[7].values;
        setEcoAvg([
          [JSON.parse(eco[1]), JSON.parse(avg[1]), "Test"],
          [JSON.parse(eco[2]), JSON.parse(avg[2]), "ODI"],
          [JSON.parse(eco[3]), JSON.parse(avg[3]), "T20"],
          [JSON.parse(eco[4]), JSON.parse(avg[4]), "IPL"],
        ]);

        setballsRuns([response.data.values[2], response.data.values[3]]);
        setfiveTen([response.data.values[12], response.data.values[13]]);
      })
      .catch(function (error) {
        console.error(error);
      });

    const info = {
      method: "GET",
      url: `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${id}`,
      headers: {
        "X-RapidAPI-Key": "789a0a5366mshe1c791ef7322453p11eeffjsn5084b89877ea", //96
        // "X-RapidAPI-Key": "05a62a30a9msh724ae88f7cb0ec5p10f4dajsnd998a8323ec6", //25408
        // "X-RapidAPI-Key": "c5935708d6mshe183f0294da3364p14325bjsn1fbf8d9d68dc",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    axios
      .request(info)
      .then(function (response) {
        // console.log(response.data);
        setPlyerInfo(response.data);
        setbattingRank(response.data.rankings.bat[0]);
        setbowlingRank(response.data.rankings.bowl[0]);
      })
      .catch(function (error) {
        console.error(error);
      });

    const Career = {
      method: "GET",
      url: `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${id}/career`,
      headers: {
        "X-RapidAPI-Key": "789a0a5366mshe1c791ef7322453p11eeffjsn5084b89877ea", //96
        // "X-RapidAPI-Key": "05a62a30a9msh724ae88f7cb0ec5p10f4dajsnd998a8323ec6", //25408
        // 'X-RapidAPI-Key': 'c5935708d6mshe183f0294da3364p14325bjsn1fbf8d9d68dc',
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    axios
      .request(Career)
      .then(function (response) {
        // console.log(response.data.values);
        setPlyerCareer(response.data.values);
      })
      .catch(function (error) {
        console.error(error);
      });

    const img = {
      method: "GET",
      url: `https://cricbuzz-cricket.p.rapidapi.com/img/v1/i1/c${imgId}/i.jpg`,
      headers: {
        "X-RapidAPI-Key": "789a0a5366mshe1c791ef7322453p11eeffjsn5084b89877ea", //96
        // "X-RapidAPI-Key": "05a62a30a9msh724ae88f7cb0ec5p10f4dajsnd998a8323ec6", //25408
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
      responseType: "blob",
    };

    axios
      .request(img)
      .then(function (response) {
        // console.log(response);
        return response.data;
      })
      .then((imageBlob) => {
        let imageObjectURL = URL.createObjectURL(imageBlob);
        setImage(imageObjectURL);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="mainDiv">
      <div className="searshDiv">
        <input
          type="text"
          value={intvalue}
          onChange={(e) => setIntValue(e.target.value)}
        />
        <button onClick={handelSearch}>search</button>
      </div>

      <div>
        {plyers?.map((item) => {
          return (
            <div key={item.id}>
              <span
                onClick={() => {
                  handalData(item.id, item.faceImageId);
                }}
              >
                {item.name}
              </span>
              <span>{item.teamName}</span>
            </div>
          );
        })}
      </div>

      <div className="Daseboard">
        <div className="info_career">
          <div className="info_careerdiv profile">
            <div className="nameimg">
              <div className="name">
                <h1>{plyerInfo.name}</h1>
                <p>{plyerInfo.role}</p>
              </div>
              <div className="img">
                <img src={image} alt="" />
              </div>
            </div>

            <p>{plyerInfo.DoB} </p>
            <p>{plyerInfo.birthPlace}</p>
            <p>{plyerInfo.intlTeam}</p>
            <p>{plyerInfo.bat}</p>
            <p>{plyerInfo.bowl}</p>
          </div>

          <div className="info_careerdiv">
            <h2>BATTING BEST</h2>
            <div className="battingRank">
              <div>
                <p>TEST</p>
                <h1>{height.values[1]}</h1>
              </div>
              <div>
                <p>ODI</p>
                <h1>{height.values[2]}</h1>
              </div>
              <div>
                <p>T20</p>
                <h1>{height.values[3]}</h1>
              </div>
            </div>
            <h2>BLOWING BEST</h2>
            <div className="battingRank">
              <div>
                <p>TEST</p>
                <h1>{best.values[1]}</h1>
              </div>
              <div>
                <p>ODI</p>
                <h1>{best.values[2]}</h1>
              </div>
              <div>
                <p>T20</p>
                <h1>{best.values[3]}</h1>
              </div>
            </div>
          </div>

          <div className="info_careerdiv">
            <h2>BATTING BEST RANK</h2>
            <div className="battingRank">
              <div>
                <p>TEST</p>
                <h1>{battingRank.testBestRank}</h1>
              </div>
              <div>
                <p>ODI</p>
                <h1>{battingRank.odiBestRank}</h1>
              </div>
              <div>
                <p>T20</p>
                <h1>{battingRank.t20BestRank}</h1>
              </div>
            </div>
            <h2>BLOWING BEST RANK</h2>
            <div className="bowlingRank">
              <div>
                <p>TEST</p>
                <h1>{bowlingRank.testBestRank}</h1>
              </div>
              <div>
                <p>ODI</p>
                <h1>{bowlingRank.odiBestRank}</h1>
              </div>
              <div>
                <p>T20</p>
                <h1>{bowlingRank.t20BestRank}</h1>
              </div>
            </div>
          </div>

          {/* <div className="info_careerdiv">
            <PieCharts value={runs} />
          </div> */}
        </div>

        <div className="graph1">
          <BarCharts value={matchInnings} />
          <LineCharts value={avgSr} />
          <BarCharts value={fiftyHundred} />
        </div>

        <div className="graph2">
          <PieCharts value={fiftyHundred} />
          <PieCharts value={fiftyHundred} />
          <AreaCharts value={ecoavg} />
        </div>

        <div className="graph2">
          <AreaCharts value={ecoavg} />

          <div className="paichart">
            <PieCharts value={fiftyHundred} />
          </div>
          <div className="paichart">
            <PieCharts value={fiftyHundred} />
          </div>
        </div>
        
  <div className="info">
          <div className="infodiv">
            {plyerCareer?.map((item) => {
              return (
                <div>
                  <p>{item.name}</p>
                  <p>{item.debut}</p>
                  <p>{item.lastPlayed}</p>
                </div>
              );
            })}
          </div>
          {/* <div className="infodiv">
            <p>{plyerInfo.teams}</p>
            <p>{plyerInfo.bio}</p>
          </div> */}
        </div> 
       
      </div>
    </div>
  );
}


