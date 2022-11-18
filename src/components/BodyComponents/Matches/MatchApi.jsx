const API_KEY = "028a5133-619f-483c-a7d8-410342615460";

export const MatchApi = () => {
  const url = `https://api.cricapi.com/v1/matches?apikey=${API_KEY}`;

  return fetch(url).then((res)=>res.json()).catch((err) => console.log("Error: ", err))
};
